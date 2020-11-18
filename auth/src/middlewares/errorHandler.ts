import { Request, Response, NextFunction } from "express"
import { RequestValidationError } from "../errors/requestValidationError"
import { DatabaseConnectionError } from "../errors/databaseConnectionError"

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(503).send({
      errors: err.serializeErrors(),
    })
  }

  res.status(400).send({
    errors: [
      {
        message: "Something went wrong!",
      },
    ],
  })
}