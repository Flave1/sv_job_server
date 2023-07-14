import { Announcement } from "../dtos/announcement";
import { UserService } from "./userService";
import express, { Express } from "express";

import { createServer } from "http";
import { io } from "..";
import logger from "../logger/logger";

// Create an Express server
const app = express();
const server = createServer(app);
// const io = new Server(server);

export class AnnouncementService {
  private announcements: Announcement[];
  private userService;
  constructor() {
    this.announcements = [];
    this.userService = new UserService();
  }
  public CreateAnnouncement(announcementData: Announcement): Announcement[] {
    // const newAnnouncement: Announcement = {
    //     ...announcementData,
    //   };

    this.announcements.push(announcementData);

    this.backgroundFunction();
    return this.announcements;
  }

  public async backgroundFunction() {
    try {
      let announcement: NotificationType = NotificationType.Announcement;
      let login: NotificationType = NotificationType.Login;


      for (let i = 0; i < this.announcements.length; i++) {
        const userIds = this.announcements[i].assignees;
        const announcementData = this.announcements[i].announcementId
        const distinctArray = [... new Set(userIds)];
        const users = await this.userService.GetUsers();

        io.to(["", "", ""]).emit("event", { message: "Some thing" })


        for (let j = 0; j < this.announcements.length; j++) {
          for (let k = 0; k < this.announcements[j].assignees.length; k++) {
            if (users[i].userId === this.announcements[j].assignees[k].id) {
              console.log("Found: " + users[i].socketId);


              io.on("connection", (socket) => {
                console.log("A client connected: " + socket.id);

                socket.on(login, function (message: any) {
                  console.log(message);
                  //io.to(users[i].socketId).emit("announcement", "New Announcement");
                  io.emit(announcement, "New Announcement");
                });
              });
              this.announcements[j].assignees.splice(k, 1);
            }
          }
        }
      }
    } catch (error) {
      logger.error(error);
    }
  }
}

// export function sendNotification(io: Server){
//   io.on('connection', (socket) => {
//     console.log('A client connected: '+ socket.id);

//     socket.on("login", function(message: any) {

//       let announcement = new AnnouncementService();
//       let socketId = announcement.backgroundFunction();
//       console.log(message);
//       //socket.emit("announcement", "New Announcement");
//       io.to(socket.id).emit("announcement", "New Announcement");
//     });
//   })
// }
