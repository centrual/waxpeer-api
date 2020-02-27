import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface ListedItemPriceData {
  average: number;
  current: number;
  img: string;
}

export interface ListedItemData {
  item_id: string;
  price: string;
  date: string;
  name: string;
  steam_price: ListedItemPriceData;
}

interface ListItemsSteamSuccessRestResponse extends BaseSuccessRestResponse {
  items: ListedItemData[];
}

export type ListItemsSteamRestResponse = ListItemsSteamSuccessRestResponse | BaseErrorRestResponse;
