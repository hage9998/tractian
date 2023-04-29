import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

class Server {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.initMiddlewares();
  }

  private initMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }
}
