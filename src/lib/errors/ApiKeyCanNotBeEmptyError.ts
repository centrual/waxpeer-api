import {ExtendableError} from 'ts-error';

export class ApiKeyCanNotBeEmptyError extends ExtendableError {
  constructor() {
    super();
    this.name = 'ApiKeyCanNotBeEmptyError';
    this.message = `Api key can not be empty.`;
  }
}
