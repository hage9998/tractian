import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares";
import dbInstance, { Database } from "../database";

const DB_NAME = process.env.DB_NAME ?? "";
const DB_USERNAME = process.env.DB_USERNAME ?? "";
const DB_PASS = process.env.DB_PASS ?? "";

class Server {
  public readonly app: Express;
  private readonly dbInstance: Database = dbInstance;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initErrorMiddleware();
    this.dbInstance.initConnection(DB_USERNAME, DB_PASS, DB_NAME);
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
