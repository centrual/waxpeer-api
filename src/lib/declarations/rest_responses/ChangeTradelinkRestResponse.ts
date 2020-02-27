import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface ChangeTradelinkSuccessRestResponse extends BaseSuccessRestResponse {
  tradelink: string;
}

export type ChangeTradelinkRestResponse = ChangeTradelinkSuccessRestResponse | BaseErrorRestResponse;
