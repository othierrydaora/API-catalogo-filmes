import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import userController from './controller/userController.js'
import filmeController from './controller/filmeController.js';


const server  = express();

server.use(cors());
server.use(express.json());
server.use(userController);
server.use(filmeController);
server.use('/storage/capasFilmes', express.static('storage/capasFilmes'));

server.listen(process.env.PORT, () => console.log(`server listening on ${process.env.PORT}`));
