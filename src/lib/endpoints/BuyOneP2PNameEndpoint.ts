import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {BuyOneP2PNameQuerystringParameters} from "../declarations/rest_requests/BuyOneP2PNameQuerystringParameters";

export class BuyOneP2PNameEndpoint extends BaseGetEndpointQuerystringRequired<BuyOneP2PNameQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/buy-one-p2p-name';
  }
}
