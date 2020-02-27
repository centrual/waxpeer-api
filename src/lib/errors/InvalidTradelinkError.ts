import {ExtendableError} from 'ts-error';

export class InvalidTradelinkError extends ExtendableError {
  constructor() {
    super();
    this.name = 'InvalidTradelinkError';
    this.message = `Invalid tradelink.`;
  }
}
