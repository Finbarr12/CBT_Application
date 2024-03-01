import express, { Application } from "express";
import router from "../Router/router";
import cors from "cors";

export const ServerApp = (app: Application) => {
  app.use(cors());
  app.use(express.json());
  app.use("/api/v1", router);
};
