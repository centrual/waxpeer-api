import {EHttpMethod} from "../declarations/enums/EHttpMethod";
import {BaseEndpoint} from "./BaseEndpoint";
import {ParsedEndpoint} from "../declarations/ParsedEndpoint";
import {stringify} from "querystring";

export abstract class BasePostEndpoint<IQueryParameters, IPostDataParameters> extends BaseEndpoint {
  protected constructor(ApiKey: string) {
    super(ApiKey, EHttpMethod.POST);
  }

  Build(queryParameters?: IQueryParameters, postDataParameters?: IPostDataParameters): ParsedEndpoint {
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
      Data: postDataParameters,
      Method: EHttpMethod.GET,
      ApiKey: parsedQueryParameters.api
    }
  }
}
