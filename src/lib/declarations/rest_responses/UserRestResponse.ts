import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

interface UserSuccessRestResponse extends BaseSuccessRestResponse {
  user: {
    wallet: number;
    id: string;
    id64: string;
    avatar: string;
    name: string;
    sell_fees: number;
    can_p2p: boolean;
    expresslink: string;

    eth_wallet?: string;
    btc_wallet?: string;
    ltc_wallet?: string;
    tradelink?: string;
  };
}

export type UserRestResponse = UserSuccessRestResponse | BaseErrorRestResponse;
