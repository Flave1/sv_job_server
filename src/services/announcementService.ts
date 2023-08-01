import { Announcement } from "../dtos/announcement";
import { UserService } from "./userService";
import express, { Express } from "express";

import { createServer } from "http";
import { io } from "..";
import logger from "../logger/logger";
import { eventType } from "../utils/eventType";
import { ResponseMessage } from "../dtos/response/responseMessage";

// Create an Express server
const app = express();

export class AnnouncementService {
  private announcements: Announcement[];
  constructor() {
    this.announcements = [];
  }
  public CreateAnnouncement(announcementData: Announcement): ResponseMessage {
    try
    {
      this.announcements.push(announcementData);

      this.backgroundFunction();
  
      const response:  ResponseMessage = {
        status: 'Successful',
        message: 'Created successfully'
      };
  
      return response;
    }
    catch(error)
    {
      logger.error(error);
      const response:  ResponseMessage = {
        status: 'Error',
        message: 'Error occurred!'
      };
      return response;
    }

  }

  public async backgroundFunction() {
    try {
      for (let i = 0; i < this.announcements.length; i++) {
        //const assignees = this.announcements[i].assignees;
        const announcementData = this.announcements[i]
        
        if(announcementData.assignees.length > 0)
        {
          io.to(announcementData.assignees.map(x=>x.id)).emit(announcementData.type, { announcementData })
        }
        else
        {
          io.emit(announcementData.clientId.toLowerCase()+"_"+announcementData.group.toLowerCase()+"_"+announcementData.type, { announcementData })
        }
      }
      this.announcements.splice(0)
    } catch (error) {
      logger.error(error);
    }
  }

  // public async backgroundFunction() {
  //   try {
  //     for (let i = 0; i < this.announcements.length; i++) {
  //       const assignees = this.announcements[i].assignees;
  //       const announcementData = this.announcements[i]
  //       const distinctAssignees = [... new Set(assignees)];

  //       const userIds = distinctAssignees.map(x=> x.id);
  //       const users = await this.userService.GetUserByIds(userIds);

  //       const userSocketIds = users.map(x=>x.socketId);
  //       console.log("Found: " + userSocketIds);
        
  //       //console.log("AnnouncementData: " + JSON.stringify(announcementData));

  //       //io.to(userSocketIds).emit(eventType.Announcement, { announcementData })
  //       io.emit(eventType.Announcement, { announcementData })
  //     }
  //     this.announcements.splice(0)
  //   } catch (error) {
  //     logger.error(error);
  //   }
  // }
}
