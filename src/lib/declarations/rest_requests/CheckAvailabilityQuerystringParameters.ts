import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface CheckAvailabilityQuerystringParameters extends CommonQuerystringParameters {
  item_id: string[];
}
