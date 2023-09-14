import express from 'express';
import { announcementRoute } from './controllers/endpoints/announcement';
import bodyParser from 'body-parser';
import { userRoute } from './controllers/endpoints/user';
import dbconfig from './data/dbconfig';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';
import { createServer, Server as ExpressServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import { port } from './config';
import logger from './logger/logger';
import { learningRoute } from './controllers/endpoints/learning';

export const app = express();
app.use(bodyParser.json())
app.use(cors());

const httpServer: ExpressServer = createServer(app);
export const io: SocketIOServer = new SocketIOServer(httpServer, {
  cors: { origin: "*" }
});

announcementRoute(app);
userRoute(app);
learningRoute(app);


async function connectDb() {
  await dbconfig.connect();
}
//connectDb();

io.on('connection', (socket) => {
  logger.info('Client connected: ' + socket.id)
  console.log('A client connected with: ' + socket.id);
})

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});