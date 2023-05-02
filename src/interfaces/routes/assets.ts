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
    this.router.put("/asset", this.assetsController.updateAsset);
    this.router.delete("/asset/:assetId", this.assetsController.deleteAsset);
    this.router.get("/asset/id/:assetId", this.assetsController.listAsset);
    this.router.get(
      "/asset/owner/:ownerId",
      this.assetsController.listManyAssetByOwner
    );
    this.router.get("/asset/all", this.assetsController.listAllAssets);
  }
}
