import { CustomError } from '../errors/custom-error';
import { httpStatus } from '../utils';

export class NotFoundError extends CustomError {
  statusCode = httpStatus.NOT_FOUND;
  constructor(public resourceName: string) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeError() {
    return { error: `${this.resourceName} not found!` };
  }
}
