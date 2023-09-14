import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/userService';
import logger from '../logger/logger';
import axios, { AxiosResponse } from 'axios';

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User operations
 */
export class UserController {

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

  static async AddUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const response = await UserService.AddUser(req.body);
      res.status(200).json(response)
    } catch (error) {
      logger.error(error);
      next(error)
    }
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
  static async GetUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const response = await UserService.GetUsers();
      res.status(200).json(response)
    } catch (error) {
      logger.error(error);
      next(error)
    }
  }
}



