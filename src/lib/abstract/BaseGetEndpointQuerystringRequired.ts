import {BaseEndpoint} from "./BaseEndpoint";
import {ParsedEndpoint} from "../declarations/ParsedEndpoint";
import {stringify} from "querystring";
import {EHttpMethod} from "../declarations/enums/EHttpMethod";

export abstract class BaseGetEndpointQuerystringRequired<IQueryParameters> extends BaseEndpoint {
  protected constructor(ApiKey: string) {
    super(ApiKey, EHttpMethod.GET);
  }

  Build(queryParameters: IQueryParameters): ParsedEndpoint {
    const selectedParameters: object = {};

    if (typeof queryParameters !== 'undefined') {
      for (const [key, val] of Object.entries(queryParameters)) {
        if (typeof val !== 'undefined') {
          Object.defineProperty(selectedParameters, key, val);
        }
      }
    }

    const parsedQueryParameters = {api: this.ApiKey, ...selectedParameters};

    return {
      Url: `${this.Path}?${stringify(parsedQueryParameters)}`,
      Method: EHttpMethod.GET,
      ApiKey: parsedQueryParameters.api
    }
  }
}
