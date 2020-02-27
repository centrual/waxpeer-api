import {ExtendableError} from 'ts-error';

export class WrongApiKeyError extends ExtendableError {
  constructor() {
    super();
    this.name = 'WrongApiKeyError';
    this.message = `Wrong Api Key.`;
  }
}
