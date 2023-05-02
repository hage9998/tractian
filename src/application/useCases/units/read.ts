import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Unit } from "../../../domain/types";
import { IUnitRepository } from "../../../domain/repositories/units";

export type ListUnitRequest = {
  unitId: string;
};

export type IListUnitUseCase = UseCase<ListUnitRequest, Promise<Unit>>;

@injectable()
export class ListUnitUseCase implements IListUnitUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(request: ListUnitRequest): Promise<Unit> {
    const { unitId } = request;
    const listedUnit = await this.unitRepository.getById(unitId);
    if (listedUnit) {
      const responseUnit: Unit = {
        _id: listedUnit._id,
        name: listedUnit.name,
        description: listedUnit.description,
        company: listedUnit.company
      };

      return responseUnit;
    }
    throw new Error("Unit does not exist");
  }
}
