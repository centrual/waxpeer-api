import {EHttpMethod} from "../declarations/enums/EHttpMethod";

export abstract class BaseEndpoint {
  abstract Path: string;

  protected HttpMethod: EHttpMethod;
  protected ApiKey: string;

  protected constructor(ApiKey: string, HttpMethod: EHttpMethod) {
    this.ApiKey = ApiKey;
    this.HttpMethod = HttpMethod;
  }
}
