import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface RemoveItemsSuccessRestResponse extends BaseSuccessRestResponse {
  count: number;
}

export type RemoveItemsRestResponse = RemoveItemsSuccessRestResponse | BaseErrorRestResponse;
