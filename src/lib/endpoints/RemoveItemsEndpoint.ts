import {RemoveItemsQuerystringParameters} from "../declarations/rest_requests/RemoveItemsQuerystringParameters";
import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";

export class RemoveItemsEndpoint extends BaseGetEndpointQuerystringRequired<RemoveItemsQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/remove-items';
  }
}
