import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface SetMySteamApiSuccessRestResponse extends BaseSuccessRestResponse {
  msg: string;
}

export type SetMySteamApiRestResponse = SetMySteamApiSuccessRestResponse | BaseErrorRestResponse;
