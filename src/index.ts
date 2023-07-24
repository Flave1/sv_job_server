import express from 'express';
import announcementRoute from './controllers/endpoints/announcement';
import bodyParser from 'body-parser';
import userRoute from './controllers/endpoints/user';
import DbConfig from './data/dbconfig'
import dbconfig from './data/dbconfig';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

export const app = express();
app.use(bodyParser.json())

const server = createServer(app);

app.use('/announcement', announcementRoute);
app.use('/user', userRoute);
app.use(cors());

async function connectDb() {
  await dbconfig.connect();
}

connectDb();

export const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
    console.log('A client connected: '+ socket.id);
  })

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = 3200;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
io.listen(9000);