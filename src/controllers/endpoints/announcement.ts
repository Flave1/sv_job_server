import AnnouncementController from '../announcementController';

import { Express } from 'express';

const basePath: String = '/notification';

export const announcementRoute = (app: Express) => {
    app.post(`${basePath}/create`, AnnouncementController.CreateAnnouncement)
}