import { Router } from 'express';
import { registerStepOne, registerStepTwo, registerStepThree } from '../controllers/userController';

const router = Router();

router.post('/register/step-one', registerStepOne);
router.post('/register/step-two', registerStepTwo);
router.post('/register/step-three', registerStepThree);

export default router;
