import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {LoadItemsWcwQuerystringParameters} from "../declarations/rest_requests/LoadItemsWcwQuerystringParameters";

export class LoadItemsWcwEndpoint extends BaseGetEndpointQuerystringRequired<LoadItemsWcwQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/load-items-wcw';
  }
}
