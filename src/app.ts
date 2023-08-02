import express from 'express';
import "dotenv/config";
import cors from "cors";
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
  }
}

export const app = new AppConfig().express;