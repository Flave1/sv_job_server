import express from 'express';
import announcementRoute from './controllers/endpoints/announcement';
import bodyParser from 'body-parser';
import userRoute from './controllers/endpoints/user';
import DbConfig from './data/dbconfig'
import dbconfig from './data/dbconfig';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';
import { createServer, Server as ExpressServer } from 'http';
import { Socket, Server as SocketIOServer } from 'socket.io';
import cors from 'cors';

export const app = express();
app.use(bodyParser.json())
app.use(cors());

const httpServer: ExpressServer = createServer(app);
export const io: SocketIOServer = new SocketIOServer(httpServer, {
  cors: {
    origin: "*",
  }
});

app.use('/announcement', announcementRoute);
app.use('/user', userRoute);


async function connectDb() {
  await dbconfig.connect();
}

connectDb();

// export const io = new ExpressServer(expressServer, {
//   cors: {
//     origin: "*",
//   }
// });

io.on('connection', (socket) => {
  console.log('A client connected: ' + socket.id);
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = 3200;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});