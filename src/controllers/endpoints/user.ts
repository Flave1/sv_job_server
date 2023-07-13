import express, { Router, Request, Response } from 'express';
import { UserController } from '../userController';

const userRoute: Router = express.Router();
const userController = new UserController();

userRoute.post('/create', userController.AddUser);
userRoute.get('/get-all', userController.GetUsers);

export default userRoute;