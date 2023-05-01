import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  CreateAssetRequest,
  ICreateAssetUseCase
} from "../../application/useCases/assets/create";
import { IDeleteAssetUseCase } from "../../application/useCases/assets/delete";
import { IListAssetAllByOwnerUseCase } from "../../application/useCases/assets/listByOwner";
import { IListAssetUseCase } from "../../application/useCases/assets/read";
import {
  IUpdateAssetUseCase,
  UpdateAssetRequest
} from "../../application/useCases/assets/update";

export interface IAssetsController {
  createAsset(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateAsset(req: Request, res: Response, next: NextFunction): Promise<void>;
  listAsset(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteAsset(req: Request, res: Response, next: NextFunction): Promise<void>;
  listManyAssetByOwner(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
}

@injectable()
export class AssetsController implements IAssetsController {
  private createAssetUseCase: ICreateAssetUseCase;
  private updateAssetUseCase: IUpdateAssetUseCase;
  private listAssetUseCase: IListAssetUseCase;
  private deleteAssetUseCase: IDeleteAssetUseCase;
  private listAssetAllByOwnerUseCase: IListAssetAllByOwnerUseCase;

  constructor(
    @inject("ICreateAssetUseCase") createAssetUseCase: ICreateAssetUseCase,
    @inject("IUpdateAssetUseCase") updateAssetUseCase: IUpdateAssetUseCase,
    @inject("IListAssetUseCase") listAssetUseCase: IListAssetUseCase,
    @inject("IDeleteAssetUseCase") deleteAssetUseCase: IDeleteAssetUseCase,
    @inject("IListAssetAllByOwnerUseCase")
    listAssetAllByOwnerUseCase: IListAssetAllByOwnerUseCase
  ) {
    this.createAssetUseCase = createAssetUseCase;
    this.updateAssetUseCase = updateAssetUseCase;
    this.listAssetUseCase = listAssetUseCase;
    this.deleteAssetUseCase = deleteAssetUseCase;
    this.listAssetAllByOwnerUseCase = listAssetAllByOwnerUseCase;

    this.createAsset = this.createAsset.bind(this);
    this.updateAsset = this.updateAsset.bind(this);
    this.listAsset = this.listAsset.bind(this);
    this.deleteAsset = this.deleteAsset.bind(this);
    this.listManyAssetByOwner = this.listManyAssetByOwner.bind(this);
  }

  async createAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const { asset }: CreateAssetRequest = req.body;
      const response = await this.createAssetUseCase.execute({ asset });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const { assetId, asset }: UpdateAssetRequest = req.body;
      await this.updateAssetUseCase.execute({
        asset,
        assetId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const { assetId } = req.params;
      const response = await this.listAssetUseCase.execute({
        assetId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteAsset(req: Request, res: Response, next: NextFunction) {
    try {
      const { assetId } = req.params;
      await this.deleteAssetUseCase.execute({
        assetId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listManyAssetByOwner(req: Request, res: Response, next: NextFunction) {
    try {
      const { ownerId } = req.params;
      const response = await this.listAssetAllByOwnerUseCase.execute({
        ownerId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
