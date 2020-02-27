import {EItemListExterior} from "../enums/EItemListExterior";
import {EItemListSortType} from "../enums/EItemListSortType";
import {EItemListDetailLevel} from "../enums/EItemListDetailLevel";
import {EItemListGameType} from "../enums/EItemListGameType";
import {CommonQuerystringParameters} from "./CommonQuerystringParameters";

export interface GetItemsListQuerystringParameters extends CommonQuerystringParameters {
  skip?: number;
  search?: string;
  brand?: string;
  exterior?: EItemListExterior;
  by?: string;
  limit?: number;
  sort?: EItemListSortType;
  max_price?: number;
  min_price?: number;
  discount?: number;
  minified?: EItemListDetailLevel;
  game?: EItemListGameType;
}
