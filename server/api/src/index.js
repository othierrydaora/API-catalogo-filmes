import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import userController from './controller/userController.js'


const server  = express();

server.use(cors());
server.use(express.json());
server.use(userController)


server.listen(process.env.PORT, () => console.log(`server listening on ${process.env.PORT}`));
