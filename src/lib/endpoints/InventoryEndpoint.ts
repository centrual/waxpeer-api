import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";
import {BaseGetEndpoint} from "../abstract/BaseGetEndpoint";

export class InventoryEndpoint extends BaseGetEndpoint<CommonQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/inventory';
  }
}
