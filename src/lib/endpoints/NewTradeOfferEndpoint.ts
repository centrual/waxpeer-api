import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {NewTradeOfferQuerystringParameters} from "../declarations/rest_requests/NewTradeOfferQuerystringParameters";

export class NewTradeOfferEndpoint extends BaseGetEndpointQuerystringRequired<NewTradeOfferQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/new-trade-offer';
  }
}
