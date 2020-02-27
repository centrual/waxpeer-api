import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface TradeData {
  id: number;
  status: number;
  suggested: number;
  name: string;
  item_id: string;
  image: string;
  sender: string;
  hash: string;
}

interface GetWcwTradesSuccessRestResponse extends BaseSuccessRestResponse {
  trades: TradeData[];
}

export type GetWcwTradesRestResponse = GetWcwTradesSuccessRestResponse | BaseErrorRestResponse;
