import { UserRepository } from "../data/repositories/userRepository";
import { CreateUser } from "../dtos/user/CreateUser";
import { GetUser } from "../dtos/user/GetUser";
import logger from "../logger/logger";

export class UserService {
  private userRepository;
  private socketId;
  constructor() {
    this.userRepository = new UserRepository();
    this.socketId = ""
  }
  public AddUser(user: CreateUser) {
    this.userRepository
      .AddUser(user)
      .then((newUser) => {
        console.log(user.email+ " Created")
        return newUser;
      })
      .catch((error) => {
        logger.error(error);
      });
  }
  public async GetUsers(): Promise<GetUser[]> {
    try {
      const users = await this.userRepository.GetUsers();

      const userList = users.map((user: GetUser) => ({
        socketId: user.socketId,
        userId: user.userId,
        email: user.email,
      }));
      return userList;
    } catch (error) {
      logger.error(error);
      return []
    }
  }
  public async GetUserByIds(userIds: String[]): Promise<GetUser[]> {
    try {
      const users = await this.userRepository.GetUserByIds(userIds);
      const userList = users.map((user: GetUser) => ({
        socketId: user.socketId,
        userId: user.userId,
        email: user.email,
      }));
      return userList;
    } catch (error) {
      logger.error(error);
      return []
    }
  }
  public setSocketId(socketId: string): String {
    this.socketId = socketId;
    return socketId
  }
  public getSocketId(): String {
    return this.socketId
  }
}
