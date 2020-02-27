import {CommonQuerystringParameters} from "./CommonQuerystringParameters";
import {EWaxSystemType} from "../enums/EWaxSystemType";

export interface NewTradeOfferQuerystringParameters extends CommonQuerystringParameters {
  using: EWaxSystemType;
  ids: number[];
  to: string;
}
