import {CommonQuerystringParameters} from "../declarations/rest_requests/CommonQuerystringParameters";
import {BasePostEndpoint} from "../abstract/BasePostEndpoint";
import {ListItemsFromSteamPostData} from "../declarations/rest_requests/ListItemsFromSteamPostData";

export class ListItemsFromSteamEndpoint extends BasePostEndpoint<CommonQuerystringParameters, ListItemsFromSteamPostData> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/list-items-steam';
  }
}
