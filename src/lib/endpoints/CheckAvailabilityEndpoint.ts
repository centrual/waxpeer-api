import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {CheckAvailabilityQuerystringParameters} from "../declarations/rest_requests/CheckAvailabilityQuerystringParameters";

export class CheckAvailabilityEndpoint extends BaseGetEndpointQuerystringRequired<CheckAvailabilityQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/check-availability';
  }
}
