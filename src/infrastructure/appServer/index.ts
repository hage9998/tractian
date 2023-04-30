import "reflect-metadata";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares";
import dbInstance, { Database } from "../database";
import { AssetsRoutes } from "../../interfaces/routes/assets";
import { container } from "tsyringe";
import {
  registerRepositories,
  registerUseCases,
  registerControllers
} from "./dependencies";

class Server {
  public readonly app: Express;
  private readonly dbInstance: Database = dbInstance;
  private assetsRoutes: AssetsRoutes;

  constructor() {
    this.app = express();
    this.dbInstance.initConnection();
    this.initMiddlewares();
    this.registerDependencies();
    this.resolveDependencies();
    this.initRouters();
    this.initErrorMiddleware();
  }

  private registerDependencies() {
    registerRepositories();
    registerUseCases();
    registerControllers();
  }

  private resolveDependencies() {
    this.assetsRoutes = container.resolve(AssetsRoutes);
  }

  private initRouters() {
    this.app.use("/tractian", this.assetsRoutes.router);
    this.app.get("/", (_req, res) => {
      res.send("Welcome");
    });
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
