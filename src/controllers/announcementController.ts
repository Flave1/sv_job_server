import { Request, Response } from 'express';
import { AnnouncementService } from '../services/announcementService';

/**
 * @swagger
 * tags:
 *   name: Announcement
 *   description: Announcement operations
 */
export class AnnouncementController {
  private announcementService;
  
  constructor() {
    this.announcementService = new AnnouncementService();
  }
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
  public CreateAnnouncement = (req: Request, res: Response) => {
    const newAnnouncement = this.announcementService.CreateAnnouncement(req.body);
    res.status(201).json(newAnnouncement);
  }
}
