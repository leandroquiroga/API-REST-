import { Router } from 'express';
import { getAllInfo } from '../controllers';

const routes = Router();

routes.get('/', getAllInfo);

export default routes;