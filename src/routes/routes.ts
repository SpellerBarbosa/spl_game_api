import { Router } from "express";
import decksController from "../controllers/deck";

const router = Router();

router.get('/deck', decksController);

export default router;