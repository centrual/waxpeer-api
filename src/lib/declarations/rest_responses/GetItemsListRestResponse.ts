import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface CSGOListItemLevel0 {
  item_id: string;
  image: string;
  price: number;
  name: string;
  steam_price: number;
  best_deals: number;
  discount: number;
}

export interface CSGOListItemLevel1 {
  item_id: string;
  image: string;
  price: number;
  name: string;
  steam_price: number;
  type: string;
  best_deals: number;
  discount: number;

  brand: null | string;
  float: null | string;
}

export interface CSGOListItemLevel2 {
  item_id: string;
  image: string;
  price: number;
  name: string;
  steam_price: number;
  type: string;
  best_deals: number;
  discount: number;

  brand: null | string;
  float: null | string;
}

export interface VGOListItemLevel0 {
  item_id: string;
  image: string;
  price: number;
  name: string;
}

export interface VGOListItemLevel1 {
  item_id: string;
  image: string;
  price: number;
  name: string;

  brand: null | string;
  float: null | string;
}

export interface VGOListItemLevel2 {
  item_id: string;
  image: string;
  price: number;
  name: string;

  brand: null | string;
  float: null | string;
}

export interface OtherListItemLevel0 {
  item_id: string;
  image: string;
  price: number;
  name: string;
}

export interface OtherListItemLevel1 {
  item_id: string;
  image: string;
  price: number;
  name: string;

  brand: null | string;
  float: null | string;
}

export interface OtherListItemLevel2 {
  item_id: string;
  image: string;
  price: number;
  name: string;

  brand: null | string;
  float: null | string;
}

export type PossibleListItemTypes = CSGOListItemLevel0 | CSGOListItemLevel1 | CSGOListItemLevel2 | VGOListItemLevel0 | VGOListItemLevel1 | VGOListItemLevel2 | OtherListItemLevel0 | OtherListItemLevel1 | OtherListItemLevel2;

interface GetItemsListSuccessRestResponse<ItemType extends PossibleListItemTypes> extends BaseSuccessRestResponse {
  count: number;
  items: ItemType[];
}

export type GetItemsListRestResponse<ItemType extends PossibleListItemTypes> = GetItemsListSuccessRestResponse<ItemType> | BaseErrorRestResponse;
