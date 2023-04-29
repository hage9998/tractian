import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomHttpError } from "../../commons/errors";

function errorMiddleware(
  error: CustomHttpError,
  _request: Request,
  res: Response,
  _next: NextFunction
) {
  const responseStatus = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Something went wrong";

  res.status(responseStatus).send({
    message
  });
}

export default errorMiddleware;
