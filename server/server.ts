import express from 'express';
import cors from 'cors';

import { dbConnect } from '../database';
import router from '../router';

const server = express();
dbConnect();
server.use(cors());
server.use(express.json());
server.use('/v1/api', router);

export default server;