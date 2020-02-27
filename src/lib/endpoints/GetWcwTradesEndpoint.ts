import {BaseGetEndpoint} from "../abstract/BaseGetEndpoint";
import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";

export class GetWcwTradesEndpoint extends BaseGetEndpoint<CommonQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/get-wcw-trades';
  }
}
