import { IAssetsController } from "./../controllers/assets";
import { Router } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class AssetsRoutes {
  public router = Router();
  private assetsController: IAssetsController;

  constructor(
    @inject("IAssetsController") assetsController: IAssetsController
  ) {
    this.assetsController = assetsController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/asset", this.assetsController.createAsset);
  }
}
