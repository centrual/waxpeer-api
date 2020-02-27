import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface PricesItem {
  min: number;
  name: string;
  count: string;
}

interface PricesSuccessRestResponse extends BaseSuccessRestResponse {
  items: PricesItem[];
}

export type PricesRestResponse = PricesSuccessRestResponse | BaseErrorRestResponse;
