class ApiResponse {
  constructor(statusCord, data, message = "Success") {
    (this.statusCord = statusCord),
      (this.data = data),
      (this.message = message),
      (this.success = statusCord < 400);
  }
}

export { ApiResponse };
