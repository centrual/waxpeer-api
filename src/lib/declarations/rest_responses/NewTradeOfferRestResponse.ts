import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface NewTradeOfferSuccessRestResponse extends BaseSuccessRestResponse {
  hash: string;
  ids: Array<number[]>;
}

export type NewTradeOfferRestResponse = NewTradeOfferSuccessRestResponse | BaseErrorRestResponse;
