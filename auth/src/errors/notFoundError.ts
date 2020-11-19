import { CustomError } from "./customError"

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor() {
    super("Route not found")

    // Only because of we are extending a built in Class
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: "Not Found" }]
  }
}
