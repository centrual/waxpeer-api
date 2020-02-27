import {ExtendableError} from 'ts-error';

export class ServerError extends ExtendableError {
  constructor() {
    super();
    this.name = 'ServerError';
    this.message = `Waxpeer server returned 500 response.`;
  }
}
