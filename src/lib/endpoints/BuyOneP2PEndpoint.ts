import {BuyOneP2PQuerystringParameters} from "../declarations/rest_requests/BuyOneP2PQuerystringParameters";
import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";

export class BuyOneP2PEndpoint extends BaseGetEndpointQuerystringRequired<BuyOneP2PQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/buy-one-p2p';
  }
}
