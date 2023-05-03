import "reflect-metadata";
import { UnitsRoutes } from "./../../interfaces/routes/units";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares";
import { AssetsRoutes } from "../../interfaces/routes/assets";
import { container } from "tsyringe";
import { CompaniesRoutes } from "../../interfaces/routes/companies";
import { UsersRoutes } from "../../interfaces/routes/users";
import {
  registerRepositories,
  registerUseCases,
  registerControllers
} from "./dependencies";

class Server {
  public readonly app: Express;
  private assetsRoutes: AssetsRoutes;
  private unitsRoutes: UnitsRoutes;
  private companiesRoutes: CompaniesRoutes;
  private usersRoutes: UsersRoutes;

  constructor() {
    this.app = express();
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
    this.unitsRoutes = container.resolve(UnitsRoutes);
    this.companiesRoutes = container.resolve(CompaniesRoutes);
    this.usersRoutes = container.resolve(UsersRoutes);
  }

  private initRouters() {
    this.app.use("/tractian", this.assetsRoutes.router);
    this.app.use("/tractian", this.unitsRoutes.router);
    this.app.use("/tractian", this.companiesRoutes.router);
    this.app.use("/tractian", this.usersRoutes.router);
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
