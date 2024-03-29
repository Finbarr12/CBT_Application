import { Request, Response } from "express";
import userModel from "../model/userModel";
import cron from "node-cron";
import { sendMail } from "../config/email";

const questions = require("../questions.json");

export const createStudent = async (req: Request, res: Response) => {
  const { name, email, matricNumber } = req.body;
  try {
    let newStudent = await userModel.create({
      name,
      email,
      matricNumber,
    });

    return res.status(200).json({
      message: "Created successfully",
      data: newStudent,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating student",
      error: error,
    });
  }
};

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const randomQuestions = getRandomQuestions(20);

    return res.status(200).json({
      message: "Questions Gotten successfully",
      data: randomQuestions,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating student",
      error: error,
    });
  }
};

export const submitAnswers = async (req: Request, res: Response) => {
  try {
    const { answers } = req.body;
    const { userId } = req.params;

    const getuser = await userModel.findById(userId);

    if (!getuser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const correctAnswers = questions.map((question: any) => ({
      questionId: question.questionId,
      correctAnswer: question.correctAnswer,
    }));

    const score = calculateScore(answers, correctAnswers);

    const student = await userModel.findByIdAndUpdate(
      userId,
      { score },
      { new: true }
    );

    cron.schedule("0 0 * * *", () => {
      sendMail(
        student?.email,
        `<h1>Your exam result:</h1>`,
        `Your exam score is ${student?.score}`
      );
    });

    return res.status(200).json({
      message: `Student has submitted`,
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      error: error,
    });
  }
};

function getRandomQuestions(count: any) {
  const selectedQuestions: any = [];
  const availableQuestions = [...questions];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion: any = availableQuestions.splice(randomIndex, 1)[0];
    selectedQuestions.push({ ...randomQuestion, questionId: i });
  }

  return selectedQuestions;
}

function calculateScore(studentAnswers: any, correctAnswers: any) {
  let score = 0;

  studentAnswers.forEach((studentAnswer: any) => {
    const correctAnswer = correctAnswers.find(
      (answer: any) => answer.questionId === studentAnswer.questionId
    );

    if (correctAnswer && studentAnswer.answer === correctAnswer.correctAnswer) {
      score++;
    }
  });

  return score;
}
