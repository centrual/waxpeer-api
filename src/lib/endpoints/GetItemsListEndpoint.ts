import {BaseGetEndpoint} from "../abstract/BaseGetEndpoint";
import {GetItemsListQuerystringParameters} from "../declarations/rest_requests/GetItemsListQuerystringParameters";

export class GetItemsListEndpoint extends BaseGetEndpoint<GetItemsListQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/get-items-list';
  }
}
