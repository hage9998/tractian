import { ICompaniesController } from "./../controllers/companies";
import { Router } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class CompaniesRoutes {
  public router = Router();
  private companysController: ICompaniesController;

  constructor(
    @inject("ICompaniesController") companysController: ICompaniesController
  ) {
    this.companysController = companysController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/company", this.companysController.createCompany);
    this.router.put("/company", this.companysController.updateCompany);
    this.router.delete(
      "/company/:companyId",
      this.companysController.deleteCompany
    );
    this.router.get(
      "/company/id/:companyId",
      this.companysController.listCompany
    );
    this.router.get(
      "/company/:companyId/units",
      this.companysController.listCompanyWithUnits
    );
    this.router.get("/company/all", this.companysController.listAllCompanies);
  }
}
