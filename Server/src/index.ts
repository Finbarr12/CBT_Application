import express, { Application } from "express";
import dbConnect from "../config/db";
import { ServerApp } from "../config/app";

const app: Application = express();

dbConnect;

ServerApp(app);

app.listen(2004, () => {
  console.log("Server is running successfully");
});
