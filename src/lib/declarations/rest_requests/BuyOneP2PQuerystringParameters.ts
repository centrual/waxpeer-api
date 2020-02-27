import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface BuyOneP2PQuerystringParameters extends CommonQuerystringParameters {
  item_id: string;
  partner: string;
  token: string;
  price: number;
}
