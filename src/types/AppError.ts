class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
    techincalMessage?: string;
  
    constructor(message: string, statusCode: number, techincalMessage?: string) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
      this.techincalMessage = techincalMessage;
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default AppError;
  