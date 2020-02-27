import {ExtendableError} from 'ts-error';

export class ApiBaseCanNotBeEmptyError extends ExtendableError {
  constructor() {
    super();
    this.name = 'ApiBaseCanNotBeEmptyError';
    this.message = `Api base can not be empty.`;
  }
}
