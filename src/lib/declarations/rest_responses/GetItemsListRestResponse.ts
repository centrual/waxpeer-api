import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface ListItem {
  item_id: string;
  image: string;
  price: number;
  name: string;

  steam_price?: number;
  type?: string;
  best_deals?: number;
  discount?: number;

  brand?: null | string;
  float?: null | string;
}

interface GetItemsListSuccessRestResponse extends BaseSuccessRestResponse {
  count: number;
  items: ListItem[];
}

export type GetItemsListRestResponse = GetItemsListSuccessRestResponse | BaseErrorRestResponse;
