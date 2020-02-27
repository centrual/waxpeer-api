import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface InventoryItemPriceData {
  average: number;
  current: number;
  img: string;
}

export interface InventoryItemData {
  item_id: string;
  color: string;
  type: string;
  name: string;
  steam_price: InventoryItemPriceData;
}

interface GetMyInventorySuccessRestResponse extends BaseSuccessRestResponse {
  count: number;
  items: InventoryItemData[];
}

export type GetMyInventoryRestResponse = GetMyInventorySuccessRestResponse | BaseErrorRestResponse;
