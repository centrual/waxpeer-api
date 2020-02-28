import {config} from 'dotenv';
config();

import {WaxpeerOptions} from "./declarations/WaxpeerOptions";

export const DefaultOptions: WaxpeerOptions = {
  ApiKey: process.env.API_KEY ?? '',
  ApiBase: 'https://api.waxpeer.com/v1'
};
