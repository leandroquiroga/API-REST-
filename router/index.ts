import { Router } from 'express';
import { getUser, postUsers } from '../controllers';
import { validator } from '../utilities';
import { validationField } from '../middlewares/index';

const router = Router();

router.get('/users', getUser);
router.get('/users/:id', validator.isValidId, validationField ,getUser);
router.post('/users', validator.createUser, validationField, postUsers);

export default router;