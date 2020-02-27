import {BaseGetEndpoint} from "../abstract/BaseGetEndpoint";
import {GetMyInventoryQuerystringParameters} from "../declarations/rest_requests/GetMyInventoryQuerystringParameters";

export class GetMyInventoryEndpoint extends BaseGetEndpoint<GetMyInventoryQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/get-my-inventory';
  }
}
