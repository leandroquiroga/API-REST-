import { Router } from 'express';
import { getUser, postUsers, updateUser } from '../controllers';
import { validator } from '../utilities/custom.validator';
import { deleteUser, getUserById } from '../controllers/index';

const router = Router();

router.get('/users', getUser);
router.get('/users/:id', validator.isValidId ,getUserById);
router.post('/users', validator.createUser, postUsers);
router.put('/users/:id', validator.isValidId, validator.updateValidator, updateUser)
router.delete('/users/:id', validator.isValidId, deleteUser)
export default router;