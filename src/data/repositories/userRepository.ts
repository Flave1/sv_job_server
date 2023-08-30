import { Model } from "mongoose";
import { CreateUser } from "../../dtos/user/CreateUser";
import { GetUser } from "../../dtos/user/GetUser";
import { UserModel } from "../../models/user";

export class UserRepository {

  static async AddUser(user: CreateUser): Promise<CreateUser> {
    const newUser = new Model<CreateUser>(user);
    return await newUser.save();
  }
  static async GetUsers(): Promise<GetUser[]> {
    const users = await UserModel.find()
      return users;
  }
  static async GetUserByIds(userIds: String[]): Promise<GetUser[]> {
    const users = await UserModel.find({userId: userIds})
      return users;
  }
}
