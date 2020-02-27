import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";
import {BasePostEndpoint} from "../abstract/BasePostEndpoint";
import {ChangeTradelinkPostData} from "../declarations/rest_requests/ChangeTradelinkPostData";

export class ChangeTradelinkEndpoint extends BasePostEndpoint<CommonQuerystringParameters, ChangeTradelinkPostData> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/change-tradelink';
  }
}
