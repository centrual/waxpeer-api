import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {SearchItemsByNameQuerystringParameters} from "../declarations/rest_requests/SearchItemsByNameQuerystringParameters";

export class SearchItemsByNameEndpoint extends BaseGetEndpointQuerystringRequired<SearchItemsByNameQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/search-items-by-name';
  }
}
