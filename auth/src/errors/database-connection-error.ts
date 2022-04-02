import { httpStatus } from '../utils';
import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  constructor(public dbErrorMsg: string, public statusCode: httpStatus) {
    super();
    // just because I am extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeError() {
    return { error: this.dbErrorMsg };
  }
}
