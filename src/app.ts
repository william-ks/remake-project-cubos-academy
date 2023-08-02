import express from 'express';
import "dotenv/config";
import cors from "cors";

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

  }
}

export const app = new AppConfig().express;