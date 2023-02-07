import express from 'express';
import cors from 'cors';

import routes from '../routes';
import { dbConnect } from '../database';

const server = express();
dbConnect();
server.use(cors());
server.use(express.json());
server.use('/v1/api', routes);

export default server;