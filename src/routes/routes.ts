import { Router } from "express";
import decksController from "../controllers/deck";
import signupController from "../controllers/signup/signupController";


const router = Router();

router.get('/deck', decksController);

router.post('/signup', signupController);

export default router;