import {BaseErrorRestResponse, BaseSuccessRestResponse} from "./BaseRestResponse";

export interface ItemAvailability {
  name: string;
  price: number;
  selling: boolean;
  image: string;
  item_id: string;
}

interface CheckAvailabilitySuccessRestResponse extends BaseSuccessRestResponse {
  data: ItemAvailability[];
}

export type CheckAvailabilityRestResponse = CheckAvailabilitySuccessRestResponse | BaseErrorRestResponse;


