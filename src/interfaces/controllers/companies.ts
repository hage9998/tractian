import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  ICreateCompanyUseCase,
  CreateCompanyRequest
} from "../../application/useCases/companies/create";
import { IDeleteCompanyUseCase } from "../../application/useCases/companies/delete";
import { IListAllCompaniesUseCase } from "../../application/useCases/companies/listAll";
import { IListCompanyWithUnitsUseCase } from "../../application/useCases/companies/listWithUnits";
import { IListCompanyUseCase } from "../../application/useCases/companies/read";
import {
  IUpdateCompanyUseCase,
  UpdateCompanyRequest
} from "../../application/useCases/companies/update";

export interface ICompaniesController {
  createCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
  listCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteCompany(req: Request, res: Response, next: NextFunction): Promise<void>;
  listCompanyWithUnits(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  listAllCompanies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
}

@injectable()
export class CompaniesController implements ICompaniesController {
  private createCompanyUseCase: ICreateCompanyUseCase;
  private updateCompanyUseCase: IUpdateCompanyUseCase;
  private listCompanyUseCase: IListCompanyUseCase;
  private deleteCompanyUseCase: IDeleteCompanyUseCase;
  private listCompanyWithUnitsUseCase: IListCompanyWithUnitsUseCase;
  private listAllCompaniesUseCase: IListAllCompaniesUseCase;

  constructor(
    @inject("ICreateCompanyUseCase")
    createCompanyUseCase: ICreateCompanyUseCase,
    @inject("IUpdateCompanyUseCase")
    updateCompanyUseCase: IUpdateCompanyUseCase,
    @inject("IListCompanyUseCase") listCompanyUseCase: IListCompanyUseCase,
    @inject("IDeleteCompanyUseCase")
    deleteCompanyUseCase: IDeleteCompanyUseCase,
    @inject("IListCompanyWithUnitsUseCase")
    listCompanyWithUnitsUseCase: IListCompanyWithUnitsUseCase,
    @inject("IListAllCompaniesUseCase")
    listAllCompaniesUseCase: IListAllCompaniesUseCase
  ) {
    this.createCompanyUseCase = createCompanyUseCase;
    this.updateCompanyUseCase = updateCompanyUseCase;
    this.listCompanyUseCase = listCompanyUseCase;
    this.deleteCompanyUseCase = deleteCompanyUseCase;
    this.listCompanyWithUnitsUseCase = listCompanyWithUnitsUseCase;
    this.listAllCompaniesUseCase = listAllCompaniesUseCase;

    this.createCompany = this.createCompany.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.listCompany = this.listCompany.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.listCompanyWithUnits = this.listCompanyWithUnits.bind(this);
    this.listAllCompanies = this.listAllCompanies.bind(this);
  }

  async createCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { company }: CreateCompanyRequest = req.body;

      const response = await this.createCompanyUseCase.execute({ company });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId, company }: UpdateCompanyRequest = req.body;
      await this.updateCompanyUseCase.execute({
        company,
        companyId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;
      const response = await this.listCompanyUseCase.execute({
        companyId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;
      await this.deleteCompanyUseCase.execute({
        companyId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listCompanyWithUnits(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;
      const response = await this.listCompanyWithUnitsUseCase.execute({
        companyId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async listAllCompanies(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listAllCompaniesUseCase.execute(null);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
