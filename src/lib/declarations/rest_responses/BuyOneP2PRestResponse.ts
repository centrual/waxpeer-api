import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface BuyOneP2PSuccessRestResponse extends BaseSuccessRestResponse {
  id: string;
  msg: string;
}

export type BuyOneP2PRestResponse = BuyOneP2PSuccessRestResponse | BaseErrorRestResponse;


