import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface CheckManySteamQuerystringParameters extends CommonQuerystringParameters {
  id: number[];
}
