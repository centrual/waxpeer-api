import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface BuyOneP2PNameSuccessRestResponse extends BaseSuccessRestResponse {
  id: string;
  msg: string;
}

export type BuyOneP2PNameRestResponse = BuyOneP2PNameSuccessRestResponse | BaseErrorRestResponse;


