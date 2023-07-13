import express, { Router, Request, Response } from 'express';
import { AnnouncementController } from '../announcementController';

const announcementRoute: Router = express.Router();
const announcementController = new AnnouncementController();

announcementRoute.post('/create', announcementController.CreateAnnouncement);

export default announcementRoute;