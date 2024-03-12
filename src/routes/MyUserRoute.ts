import express from "express";
import ctrl from "../controllers/MyUserController.ts";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();

//* /api/my/user
router.post("/", jwtCheck, ctrl.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  ctrl.updateCurrentUser
);

export default router;
