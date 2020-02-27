import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface WcwItemData {
  id: string;
  owner: string;
  author: string;
  idata: string;
  category: string;
  mdata: string;
  image: string;
  name: string;
  unique: string;
  generic: string;
  average: number;
  floor: number;
  instant: number;
  app_id: string;
}

interface LoadItemsWcwSuccessRestResponse extends BaseSuccessRestResponse {
  items: WcwItemData;
}

export type LoadItemsWcwRestResponse = LoadItemsWcwSuccessRestResponse | BaseErrorRestResponse;
