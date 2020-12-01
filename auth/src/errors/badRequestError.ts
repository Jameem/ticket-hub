import { CustomError } from "./customError"

export class BadRequestError extends CustomError {
  statusCode = 400
  reason = "Error connecting to database!"

  constructor(public message: string) {
    super(message)

    // Only because of we are extending a built in Class
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
