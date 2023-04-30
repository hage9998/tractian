import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  CreateAssetRequest,
  ICreateAssetUseCase
} from "../../application/useCases/Assets/create";

export interface IAssetsController {
  createAsset(req: Request, res: Response, next: NextFunction): Promise<void>;
}

@injectable()
export class AssetsController implements IAssetsController {
  private createAssetUseCase: ICreateAssetUseCase;

  constructor(
    @inject("ICreateAssetUseCase") createAssetUseCase: ICreateAssetUseCase
  ) {
    this.createAssetUseCase = createAssetUseCase;
    this.createAsset = this.createAsset.bind(this);
  }

  async createAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const { asset }: CreateAssetRequest = req.body;
      console.log(asset);
      const response = await this.createAssetUseCase.execute({ asset });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
