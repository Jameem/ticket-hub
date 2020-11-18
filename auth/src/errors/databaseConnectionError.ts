export class DatabaseConnectionError extends Error {
  statusCode = 503
  reason = "Error connecting to database!"

  constructor() {
    super()

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
