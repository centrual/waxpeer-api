import {EPricesGameType} from "../enums/EPricesGameType";
import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface PricesQuerystringParameters extends CommonQuerystringParameters {
  game: EPricesGameType;
  max_price: number;
  min_price?: number;
  search?: string;
}
