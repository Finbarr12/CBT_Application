import { Router } from "express";
import {
  createStudent,
  getQuestions,
  submitAnswers,
} from "../controller/userController";

const router = Router();

router.post("/createStudent", createStudent);
router.get("/getQuestions", getQuestions);
router.post("/submitanswers/:userId", submitAnswers);

export default router;
