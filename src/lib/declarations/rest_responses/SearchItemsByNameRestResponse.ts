import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface FoundItem {
  name: string;
  price: number;
  image: string;
  item_id: string;

  selling?: true;
}

interface SearchItemsByNameSuccessRestResponse extends BaseSuccessRestResponse {
  items: FoundItem[];
}

export type SearchItemsByNameRestResponse = SearchItemsByNameSuccessRestResponse | BaseErrorRestResponse;
