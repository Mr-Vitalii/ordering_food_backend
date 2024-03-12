import express from "express";
import ctrl from "../controllers/MyUserController.ts";
import { jwtCheck } from "../middleware/auth";
const router = express.Router();

//* /api/my/user
router.post("/", jwtCheck, ctrl.createCurrentUser);

export default router;
