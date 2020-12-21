// Instruments
import { checkErrorStatusCode } from 'utils';


export class NotFoundError extends Error {
  constructor(...args) {
    super(args);
    const [, statusCode = 404] = args;

    checkErrorStatusCode(statusCode, 'NotFoundError');

    Error.captureStackTrace(this, NotFoundError);
    this.name = 'NotFoundError';
    this.statusCode = statusCode;
  }
}
