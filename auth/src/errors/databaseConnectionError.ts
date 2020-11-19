import { CustomError } from "./customError"

export class DatabaseConnectionError extends CustomError {
  statusCode = 503
  reason = "Error connecting to database!"

  constructor() {
    super("Error connecting to database!")

    // Only because of we are extending a built in Class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ]
  }
}
