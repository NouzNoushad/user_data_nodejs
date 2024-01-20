import express from "express";
import { uploadUserData, getUserData } from "../controllers/user_controller.js";
import { uploadImage } from "../middlewares/upload_middleware.js";

const router = express.Router();

router.post('/create_user', uploadImage, uploadUserData);
router.get('/get_users', getUserData);

export default router;