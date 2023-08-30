
import { UserController } from '../userController';
import { Express } from 'express';

const basePath: String = '/user';
export const userRoute = (app: Express) => {
    app.post(`${basePath}/create`, UserController.AddUser);
    app.get(`${basePath}/get-all`, UserController.GetUsers);
}