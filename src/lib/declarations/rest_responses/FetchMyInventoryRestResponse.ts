import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface FetchMyInventorySuccessRestResponse extends BaseSuccessRestResponse {
  total_inventory_count: number;
}

export type FetchMyInventoryRestResponse = FetchMyInventorySuccessRestResponse | BaseErrorRestResponse;
