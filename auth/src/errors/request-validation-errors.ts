import { httpStatus } from '../utils';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  constructor(public errorMsg: string, public statusCode: httpStatus) {
    super();
    //only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeError() {
    return { error: this.errorMsg };
  }
}
