import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";
import {EItemGameType} from "../enums/EItemGameType";

export interface InventoryItem {
  id: number;
  name: string;
  price: number;
  item_id: string;
  image: string;
  game: EItemGameType;
}

interface InventorySuccessRestResponse extends BaseSuccessRestResponse {
  items: InventoryItem[];
}

export type InventoryRestResponse = InventorySuccessRestResponse | BaseErrorRestResponse;


