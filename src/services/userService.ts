import { UserRepository } from "../data/repositories/userRepository";
import { CreateUser } from "../dtos/user/CreateUser";
import { GetUser } from "../dtos/user/GetUser";
import logger from "../logger/logger";

export class UserService {
  private userRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  public AddUser(user: CreateUser) {
    this.userRepository
      .AddUser(user)
      .then((newUser) => {
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
}
