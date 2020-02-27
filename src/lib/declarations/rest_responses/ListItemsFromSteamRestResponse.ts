import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface ListedItem {
  item_id: number;
  price: number;
}

interface ListItemsFromSteamSuccessRestResponse extends BaseSuccessRestResponse {
  items: ListedItem[];
}

export type ListItemsFromSteamRestResponse = ListItemsFromSteamSuccessRestResponse | BaseErrorRestResponse;
