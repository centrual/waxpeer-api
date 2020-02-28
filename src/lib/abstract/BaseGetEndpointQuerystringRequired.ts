import {BaseEndpoint} from "./BaseEndpoint";
import {ParsedEndpoint} from "../declarations/ParsedEndpoint";
import {stringify} from "querystring";
import {EHttpMethod} from "../declarations/enums/EHttpMethod";

export abstract class BaseGetEndpointQuerystringRequired<IQueryParameters> extends BaseEndpoint {
  protected constructor(ApiKey: string) {
    super(ApiKey, EHttpMethod.GET);
  }

  Build(queryParameters: IQueryParameters): ParsedEndpoint {
    const selectedParameters = this.GetBuildParameters(queryParameters);
    const parsedQueryParameters = {api: this.ApiKey, ...selectedParameters};

    return {
      Url: `${this.Path}?${stringify(parsedQueryParameters)}`,
      Method: EHttpMethod.GET,
      ApiKey: parsedQueryParameters.api
    }
  }
}
