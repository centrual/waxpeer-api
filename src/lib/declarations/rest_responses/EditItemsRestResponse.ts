import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface UpdatedItem {
  item_id: number;
  price: number;
}

export interface FailedItem {
  item_id: number;
  msg: string;
}

interface EditItemsSuccessRestResponse extends BaseSuccessRestResponse {
  updated: UpdatedItem[];
  failed: FailedItem[];
}

export type EditItemsRestResponse = EditItemsSuccessRestResponse | BaseErrorRestResponse;
