import {EItemListExterior} from "../enums/EItemListExterior";
import {EItemListSortType} from "../enums/EItemListSortType";
import {EItemListDetailLevel} from "../enums/EItemListDetailLevel";
import {EItemListGameType} from "../enums/EItemListGameType";
import {CommonQuerystringParameters} from "./CommonQuerystringParameters";
import {EItemBrands} from "../enums/EItemBrands";

export interface GetItemsListQuerystringParameters extends CommonQuerystringParameters {
  game?: EItemListGameType;
  minified?: EItemListDetailLevel;
  exterior?: EItemListExterior;
  brand?: EItemBrands;
  sort?: EItemListSortType;
  skip?: number;
  search?: string;
  by?: string;
  limit?: number;
  max_price?: number;
  min_price?: number;
  discount?: number;
}
