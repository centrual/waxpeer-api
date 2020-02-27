import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {PricesQuerystringParameters} from "../declarations/rest_requests/PricesQuerystringParameters";

export class PricesEndpoint extends BaseGetEndpointQuerystringRequired<PricesQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/prices';
  }
}
