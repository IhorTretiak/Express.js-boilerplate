// Instruments
import { checkErrorStatusCode } from 'utils';


export class ValidationError extends Error {
  constructor(...args) {
    super(args);
    const [, statusCode = 400] = args;

    checkErrorStatusCode(statusCode, 'ValidationError');

    Error.captureStackTrace(this, ValidationError);
    this.name = 'ValidationError';
    this.statusCode = statusCode;
  }
}
