import express from "express";
import ctrl from "../controllers/user";
const router = express.Router();

//* /api/my/user
router.post("/", ctrl.createCurrentUser);

export default router;
