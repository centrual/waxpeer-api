import {EHttpMethod} from "./enums/EHttpMethod";

export interface ParsedEndpoint {
  Method: EHttpMethod;
  ApiKey: string;
  Url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Data?: any;
}
