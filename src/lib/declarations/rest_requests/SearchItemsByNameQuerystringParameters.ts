import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface SearchItemsByNameQuerystringParameters extends CommonQuerystringParameters {
  names: string[];
}
