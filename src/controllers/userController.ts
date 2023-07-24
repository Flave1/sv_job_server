import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import {ResponseMessage} from "../dtos/response/responseMessage";

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User operations
 */
export class UserController {
  private userService;
  
  constructor() {
    this.userService = new UserService();
  }
  
/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Add a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
  public AddUser = (req: Request, res: Response) => {
    const user = this.userService.AddUser(req.body);
    
    const created:  ResponseMessage = {
        status: 'Successful',
        message: 'Created successfully'
      };
    res.status(201).json(created);
  }

/**
 * @swagger
 * /user/get-all:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Successful response
 */
public GetUsers = (req: Request, res: Response) => {
    const users = this.userService.GetUsers()
    .then(userList => {
        res.status(200).json(userList)
    })
  }
}



