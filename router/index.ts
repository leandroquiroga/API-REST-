import { Router } from 'express';
import { getUser, postUsers, updateUser, deleteUser, getUserById } from '../controllers';
import { validator } from '../utilities/custom.validator';

const router = Router();

router.get('/users', getUser);
router.get('/users/:id', validator.isValidId ,getUserById);
router.post('/users', validator.createUser, postUsers);
router.put('/users/:id', validator.isValidId, validator.updateValidator, updateUser)
router.delete('/users/:id', validator.isValidId, deleteUser)
export default router;