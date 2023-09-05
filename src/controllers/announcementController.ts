import { NextFunction, Request, Response } from 'express';
import { AnnouncementService } from '../services/announcementService';
import logger from '../logger/logger';

/**
 * @swagger
 * tags:
 *   name: Notification
 *   description: Notification operations
 */
class AnnouncementController {

  /**
 * @swagger
 * /notification/create:
 *   post:
 *     summary: Create Announcement
 *     tags: [Notification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notification'
 *     responses:
 *       201:
 *         description: Notification added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notification'
 */
  static async CreateAnnouncement(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const response = await AnnouncementService.CreateAnnouncement(req.body);
      res.status(200).json(response)
    } catch (error) {
      logger.error(error);
      next(error)
    }
  }
}


export default AnnouncementController;