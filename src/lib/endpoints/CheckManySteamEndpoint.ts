import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {CheckManySteamQuerystringParameters} from "../declarations/rest_requests/CheckManySteamQuerystringParameters";

export class CheckManySteamEndpoint extends BaseGetEndpointQuerystringRequired<CheckManySteamQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/check-many-steam';
  }
}
