import {ECommonGameIds} from "../enums/ECommonGameIds";
import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface GetMyInventoryQuerystringParameters extends CommonQuerystringParameters {
  skip?: number;
  game?: ECommonGameIds | number;
}
