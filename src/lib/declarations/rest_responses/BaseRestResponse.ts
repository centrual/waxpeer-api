export interface BaseSuccessRestResponse {
  success: true;
}

export interface BaseErrorRestResponse {
  success: false;
  msg: string;
}

export type BaseRestResponse = BaseSuccessRestResponse | BaseErrorRestResponse;
