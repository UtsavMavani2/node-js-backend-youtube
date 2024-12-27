class ApiError extends Error {
  constructor(
    statusCord,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    (this.statusCord = statusCord),
      (this.message = message),
      (this.errors = errors),
      (this.success = false);
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
