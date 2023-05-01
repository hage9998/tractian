import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Unit } from "../../../domain/types";
import { IUnitRepository } from "../../../domain/repositories/units";

export type UpdateUnitRequest = {
  unitId: string;
  unit: Omit<Unit, "_id">;
};

export type IUpdateUnitUseCase = UseCase<UpdateUnitRequest, Promise<void>>;

@injectable()
export class UpdateUnitUseCase implements IUpdateUnitUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(request: UpdateUnitRequest): Promise<void> {
    const { unitId, unit } = request;
    await this.unitRepository.updateById(unitId, unit);
  }
}
