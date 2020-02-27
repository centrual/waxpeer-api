import {BaseGetEndpointQuerystringRequired} from "../abstract/BaseGetEndpointQuerystringRequired";
import {ReadyToTransferP2PQuerystringParameters} from "../declarations/rest_requests/ReadyToTransferP2PQuerystringParameters";

export class ReadyToTransferP2PEndpoint extends BaseGetEndpointQuerystringRequired<ReadyToTransferP2PQuerystringParameters> {
  Path: string;

  constructor(ApiKey: string) {
    super(ApiKey);
    this.Path = '/ready-to-transfer-p2p';
  }
}
