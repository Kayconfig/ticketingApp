import { httpStatus } from '../utils';
import { IErrorMsg } from './types';

export abstract class CustomError extends Error {
  abstract statusCode: httpStatus;
  abstract serializeError(): IErrorMsg;
  constructor() {
    super();
    //doing this because I am extending a built in Class;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
