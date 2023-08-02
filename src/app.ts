import "express-async-errors";
import cors from "cors";
import { handleError } from "./api/middleware/handleError";
import "dotenv/config";
import express from 'express';
import { router } from './api/routes';

class AppConfig {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use(router);
    this.express.use(handleError);
  }
}

export const app = new AppConfig().express;