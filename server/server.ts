import express from 'express';
import cors from 'cors';

import { dbConnect } from '../database';
import router from '../router';
import {errorHandler, errorServer} from '../utilities/errors/error'

const server = express();
dbConnect();
server.use(cors());
server.use(express.json());
server.use('/v1/api', router);

server.use(errorHandler);
server.use(errorServer);

export default server;