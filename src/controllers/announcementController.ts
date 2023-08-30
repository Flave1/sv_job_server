import { NextFunction, Request, Response } from 'express';
import { AnnouncementService } from '../services/announcementService';
import logger from '../logger/logger';

/**
 * @swagger
 * tags:
 *   name: Announcement
 *   description: Announcement operations
 */
class AnnouncementController {

  /**
 * @swagger
 * /announcement/create:
 *   post:
 *     summary: Create Announcement
 *     tags: [Announcement]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Announcement'
 *     responses:
 *       201:
 *         description: Announcement added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Announcement'
 */
  static async CreateAnnouncement(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const response = AnnouncementService.CreateAnnouncement(req.body);
      res.status(200).json(response)
    } catch (error) {
      logger.error(error);
      next(error)
    }
  }
}


export default AnnouncementController;