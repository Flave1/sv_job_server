export interface Announcement {
    announcementId: string;
    subject: string;
    content: string;
    notificationSourceId: string;
    notificationEmailLink: string;
    notificationPageLink: string;
    type: string;
    group: string;
    dateCreated: string;
    clientId: string;
    assignees: [{id: string}]
  }