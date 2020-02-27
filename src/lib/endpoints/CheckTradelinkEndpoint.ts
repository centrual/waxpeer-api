import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";
import {BasePostEndpoint} from "../abstract/BasePostEndpoint";
import {CheckTradelinkPostData} from "../declarations/rest_requests/CheckTradelinkPostData";

export class CheckTradelinkEndpoint extends BasePostEndpoint<CommonQuerystringParameters, CheckTradelinkPostData> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/check-tradelink';
  }
}
