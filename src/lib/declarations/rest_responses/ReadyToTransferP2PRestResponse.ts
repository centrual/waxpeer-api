import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface ReadyToTransferItemData {
  id: number;
  item_id: string;
  give_amount: string;
  image: string;
  price: number;
  game: string;
  name: string;
  status: number;
}

export interface ReadyToTransferData {
  id: number;
  costum_id: string;
  trade_id: number;
  status: string;
  trade_message: string;
  tradelink: string;
  done: boolean;
  for_steamid32: string;
  for_steamid64: string;
  created: string;
  send_until: string;
  items: ReadyToTransferItemData[];
}

interface ReadyToTransferP2PSuccessRestResponse extends BaseSuccessRestResponse {
  trades: ReadyToTransferData[];
}

export type ReadyToTransferP2PRestResponse = ReadyToTransferP2PSuccessRestResponse | BaseErrorRestResponse;
