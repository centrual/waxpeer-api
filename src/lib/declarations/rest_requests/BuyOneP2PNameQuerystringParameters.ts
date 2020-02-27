import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface BuyOneP2PNameQuerystringParameters extends CommonQuerystringParameters {
  name: string;
  partner: string;
  token: string;
  price: number;
}
