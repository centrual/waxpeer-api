import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";
import {EItemGrade} from "../enums/EItemGrade";
import {EItemBrands} from "../enums/EItemBrands";

export interface ListItem {
  item_id: string;
  image: string;
  price: number;
  name: string;

  steam_price?: number;
  type?: EItemGrade;
  best_deals?: number;
  discount?: number;

  brand?: null | EItemBrands;
  float?: null | string;
}

interface GetItemsListSuccessRestResponse extends BaseSuccessRestResponse {
  count: number;
  items: ListItem[];
}

export type GetItemsListRestResponse = GetItemsListSuccessRestResponse | BaseErrorRestResponse;
