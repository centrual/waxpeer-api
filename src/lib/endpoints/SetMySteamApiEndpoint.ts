import {SetMySteamApiQuerystringParameters} from "../declarations/rest_requests/SetMySteamApiQuerystringParameters";
import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";

export class SetMySteamApiEndpoint extends BaseGetEndpointQuerystringRequired<SetMySteamApiQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/set-my-steamapi';
  }
}
