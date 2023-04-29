import { StatusCodes } from "http-status-codes";

export class CustomHttpError extends Error {
  statusCode: StatusCodes;

  constructor(message: string, statusCode: StatusCodes) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;

    Error.captureStackTrace(this, CustomHttpError);
  }
}
