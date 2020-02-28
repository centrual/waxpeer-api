import {EHttpMethod} from "../declarations/enums/EHttpMethod";

export abstract class BaseEndpoint {
  abstract Path: string;

  protected HttpMethod: EHttpMethod;
  protected ApiKey: string;

  protected constructor(ApiKey: string, HttpMethod: EHttpMethod) {
    this.ApiKey = ApiKey;
    this.HttpMethod = HttpMethod;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected GetBuildParameters(queryParameters: any): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectedParameters: any = {};

    if (typeof queryParameters !== 'undefined') {
      for (const [key, val] of Object.entries(queryParameters)) {
        if (typeof val !== 'undefined') {
          selectedParameters[key] = val;
        }
      }
    }
  }
}
