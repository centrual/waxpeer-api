import {ExtendableError} from 'ts-error';

export class UnexceptedError extends ExtendableError {
  constructor(errorMessage?: string) {
    super();
    this.name = 'UnexceptedError';
    this.message = 'Unexcepted error occured.';

    if (typeof errorMessage === 'string') {
      this.message += `Message: ${errorMessage}`;
    }
  }
}
