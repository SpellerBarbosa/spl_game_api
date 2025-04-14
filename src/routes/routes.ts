import { Router } from "express";
import decksController from "../controllers/deck";
import signupController from "../controllers/user/signupController";
import loginController from "../controllers/user/loginController";


const router = Router();

router.get('/deck', decksController);

router.post('/signup', signupController);

router.post('/login', loginController);

export default router;