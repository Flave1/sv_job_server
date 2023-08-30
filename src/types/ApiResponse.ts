export class ApiResponse<T> {
  public success: boolean;
  public message: string;
  public data: T | null;
  public technicalMessage: string;

  constructor(success: boolean = false, message: string = '', data: T | null = null, technicalMessage = '') {
    this.success = success;
    this.message = message;
    this.data = data;
    this.technicalMessage = technicalMessage;
  }

  toJSON(): any {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
      technicalMessage: this.technicalMessage
    };
  }
}
