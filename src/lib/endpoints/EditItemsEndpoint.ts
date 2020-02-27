import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";
import {BasePostEndpoint} from "../abstract/BasePostEndpoint";
import {EditItemsPostData} from "../declarations/rest_requests/EditItemsPostData";

export class EditItemsEndpoint extends BasePostEndpoint<CommonQuerystringParameters, EditItemsPostData> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/edit-items';
  }
}
