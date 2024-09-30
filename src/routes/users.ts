import { Router } from "express";
import userController from "../controllers/user.controllers";
import logger from "../middlewares/logedIn";

const router = Router();
router.get('/', userController.getAll);
router.post('/newUser', userController.newUser)
router.post('/login', userController.loginOne);

export default router;
