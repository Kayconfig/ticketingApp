import { httpStatus } from '../utils';
import { CustomError } from './custom-error';
import { IErrorMsg } from './types';

export class BadRequestError extends CustomError {
  statusCode = httpStatus.BAD_REQUEST;
  constructor(public message: string) {
    super();
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeError(): IErrorMsg {
    return {
      error: this.message,
    };
  }
}
