import express from 'express';

import cors from 'cors';
import routes from '../routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use('/v1/api', routes);
export default server;