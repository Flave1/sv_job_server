import { Model } from "mongoose";
import { CreateUser } from "../../dtos/user/CreateUser";
import { GetUser } from "../../dtos/user/GetUser";
import { UserModel } from "../../models/user";

export class UserRepository {
  private userModel: Model<CreateUser>;
  constructor() {
    this.userModel = UserModel;
  }

  public async AddUser(user: CreateUser): Promise<CreateUser> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  public async GetUsers(): Promise<GetUser[]> {
    const users = await UserModel.find()
      return users;
  }
  public async GetUserByIds(userIds: String[]): Promise<GetUser[]> {
    const users = await UserModel.find({userId: userIds})
      return users;
  }
}
