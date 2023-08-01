import swaggerJsDoc from "swagger-jsdoc";
import { Express } from "express";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "SMP Notification API",
      description: "An API for background notifications and services",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:3200", // Replace with your server URL
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            socketId: {
              type: "string",
            },
            userId: {
              type: "string",
            },
            email: {
              type: "string",
            },
          },
        },
        Announcement: {
            type: "object",
            properties: {
              announcementId: {
                type: "string",
              },
            subject: {
              type: "string",
            },
            content: {
              type: "string",
            },
            notificationSourceId: {
              type: "string",
            },
            notificationEmailLink: {
              type: "string",
            },
            notificationPageLink: {
              type: "string",
            },
            type: {
              type: "string",
            },
            group: {
              type: "string",
            },
            dateCreated: {
              type: "string",
            },
            clientId: {
              type: "string",
            },
              assignees: {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    }
                  }
                }
            }
            },
          },
      },
    },
  },
  apis: ["./src/controllers/*.ts"], // Replace with the path to your controller files
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;
