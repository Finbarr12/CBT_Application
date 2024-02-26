import express, { Application } from "express";

export const ServerApp = (app: Application) => {
  app.use(express.json());
};
