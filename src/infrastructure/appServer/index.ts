import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares";
import dbInstance, { Database } from "../database";

class Server {
  public readonly app: Express;
  private readonly dbInstance: Database = dbInstance;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initErrorMiddleware();
    this.dbInstance.initConnection();
  }

  private initMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }

  private initErrorMiddleware() {
    this.app.use(errorMiddleware);
  }
}

export default Server;
