import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  ICreateUnitUseCase,
  CreateUnitRequest
} from "../../application/useCases/units/create";
import { IDeleteUnitUseCase } from "../../application/useCases/units/delete";
import { IListAllUnitsUseCase } from "../../application/useCases/units/listAll";
import { IListUnitByCompanyUseCase } from "../../application/useCases/units/listByCompany";
import { IListUnitUseCase } from "../../application/useCases/units/read";
import {
  IUpdateUnitUseCase,
  UpdateUnitRequest
} from "../../application/useCases/units/update";

export interface IUnitsController {
  createUnit(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateUnit(req: Request, res: Response, next: NextFunction): Promise<void>;
  listUnit(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteUnit(req: Request, res: Response, next: NextFunction): Promise<void>;
  listManyUnitByCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  listAllUnits(req: Request, res: Response, next: NextFunction): Promise<void>;
}

@injectable()
export class UnitsController implements IUnitsController {
  private createUnitUseCase: ICreateUnitUseCase;
  private updateUnitUseCase: IUpdateUnitUseCase;
  private listUnitUseCase: IListUnitUseCase;
  private deleteUnitUseCase: IDeleteUnitUseCase;
  private listUnitByCompanyUseCase: IListUnitByCompanyUseCase;
  private listAllUnitsUseCase: IListAllUnitsUseCase;

  constructor(
    @inject("ICreateUnitUseCase") createUnitUseCase: ICreateUnitUseCase,
    @inject("IUpdateUnitUseCase") updateUnitUseCase: IUpdateUnitUseCase,
    @inject("IListUnitUseCase") listUnitUseCase: IListUnitUseCase,
    @inject("IDeleteUnitUseCase") deleteUnitUseCase: IDeleteUnitUseCase,
    @inject("IListUnitByCompanyUseCase")
    listUnitByCompanyUseCase: IListUnitByCompanyUseCase,
    @inject("IListAllUnitsUseCase") listAllUnitsUseCase: IListAllUnitsUseCase
  ) {
    this.createUnitUseCase = createUnitUseCase;
    this.updateUnitUseCase = updateUnitUseCase;
    this.listUnitUseCase = listUnitUseCase;
    this.deleteUnitUseCase = deleteUnitUseCase;
    this.listUnitByCompanyUseCase = listUnitByCompanyUseCase;
    this.listAllUnitsUseCase = listAllUnitsUseCase;

    this.createUnit = this.createUnit.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.listUnit = this.listUnit.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
    this.listManyUnitByCompany = this.listManyUnitByCompany.bind(this);
    this.listAllUnits = this.listAllUnits.bind(this);
  }

  async createUnit(req: Request, res: Response, next: NextFunction) {
    try {
      const { unit }: CreateUnitRequest = req.body;

      const response = await this.createUnitUseCase.execute({ unit });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateUnit(req: Request, res: Response, next: NextFunction) {
    try {
      const { unitId, unit }: UpdateUnitRequest = req.body;
      await this.updateUnitUseCase.execute({
        unit,
        unitId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listUnit(req: Request, res: Response, next: NextFunction) {
    try {
      const { unitId } = req.params;
      const response = await this.listUnitUseCase.execute({
        unitId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteUnit(req: Request, res: Response, next: NextFunction) {
    try {
      const { unitId } = req.params;
      await this.deleteUnitUseCase.execute({
        unitId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listManyUnitByCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;
      const response = await this.listUnitByCompanyUseCase.execute({
        companyId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async listAllUnits(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listAllUnitsUseCase.execute(null);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
