import express, { Application } from "express";
import router from "../Router/router";

export const ServerApp = (app: Application) => {
  app.use(express.json());
  app.use("/api/v1", router);
};
