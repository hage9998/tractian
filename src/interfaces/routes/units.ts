import { IUnitsController } from "./../controllers/units";
import { Router } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class UnitsRoutes {
  public router = Router();
  private unitsController: IUnitsController;

  constructor(@inject("IUnitsController") unitsController: IUnitsController) {
    this.unitsController = unitsController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/unit", this.unitsController.createUnit);
    this.router.put("/unit", this.unitsController.updateUnit);
    this.router.delete("/unit/:unitId", this.unitsController.deleteUnit);
    this.router.get("/unit/id/:unitId", this.unitsController.listUnit);
    this.router.get(
      "/unit/company/:companyId",
      this.unitsController.listManyUnitByCompany
    );
    this.router.get("/unit/all", this.unitsController.listAllUnits);
  }
}
