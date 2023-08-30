import { UserRepository } from "../data/repositories/userRepository";
import { CreateUser } from "../dtos/user/CreateUser";
import { GetUser } from "../dtos/user/GetUser";
import { ApiResponse } from "../types/ApiResponse";

export class UserService {
  // private socketId;
  
  static async AddUser(user: CreateUser): Promise<ApiResponse<any>> {
    const response = new ApiResponse<any>();
    const result = await UserRepository.AddUser(user);
    response.data = result
    response.message = "Successful";
    response.success = true;
    return response;
  }

  static async GetUsers(): Promise<ApiResponse<any>> {
    const response = new ApiResponse<any>();
    const users = await UserRepository.GetUsers();
      const userList = users.map((user: GetUser) => ({
        socketId: user.socketId,
        userId: user.userId,
        email: user.email,
      }));
      response.data = userList
      response.message = "Successful";
      response.success = true;
      return response;
  }

  static async GetUserByIds(userIds: String[]): Promise<ApiResponse<any>> {
    const response = new ApiResponse<any>();
    const users = await UserRepository.GetUserByIds(userIds);
      const userList = users.map((user: GetUser) => ({
        socketId: user.socketId,
        userId: user.userId,
        email: user.email,
      }));
      response.data = userList
      response.message = "Successful";
      response.success = true;
      return response;
    
  }
  // public setSocketId(socketId: string): String {
  //   this.socketId = socketId;
  //   return socketId
  // }
  // public getSocketId(): String {
  //   return this.socketId
  // }
}
