import { AnnouncementModel } from "../dtos/announcement";
import { io } from "..";
import { ApiResponse } from '../types/ApiResponse'
import AppError from "../types/AppError";

export class AnnouncementService {
  private static announcements: AnnouncementModel[] = [];

  static async CreateAnnouncement(announcementData: AnnouncementModel): Promise<ApiResponse<any>> {
    const response = new ApiResponse<any>();
    this.announcements.push(announcementData);
    this.backgroundFunction();
    response.data = announcementData
    response.message = "Successful";
    response.success = true;
    return response;
  }

  static async backgroundFunction() {
    for (let i = 0; i < this.announcements.length; i++) {
      const announcementData = this.announcements[i]
      if (announcementData.assignees.length > 0) {
        console.log('emited specific user');

        io.to(announcementData.assignees.map(x => x.id)).emit(announcementData.type, { announcementData })
      }
      else {

        console.log('emited to all');
        if(announcementData.group.toLowerCase() == "teacher")
        {
          var group = "admin"
          io.emit(announcementData.clientId.toLowerCase() + "_"+ group +"_" + announcementData.type, { announcementData })
        }
        io.emit(announcementData.clientId.toLowerCase() + "_" + announcementData.group.toLowerCase() + "_" + announcementData.type, { announcementData })
      }
    }
    this.announcements.splice(0)
  }
}
