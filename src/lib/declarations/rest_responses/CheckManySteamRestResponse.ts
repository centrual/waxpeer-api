import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";
import {ETradeStage} from "../enums/ETradeStage";

export interface CheckedTradeData {
  status: ETradeStage;
  price: number;
  for_steamid64: string;
  id: string;
  name: string;
  done: boolean;
  send_until: number;
  last_updated: number;
  counter: number;

  reason?: string;
  trade_id?: string;
}

interface CheckManySteamSuccessRestResponse extends BaseSuccessRestResponse {
  trades: CheckedTradeData[];
}

export type CheckManySteamRestResponse = CheckManySteamSuccessRestResponse | BaseErrorRestResponse;
