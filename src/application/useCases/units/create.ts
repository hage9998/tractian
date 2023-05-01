import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Unit } from "../../../domain/types";
import { IUnitRepository } from "../../../domain/repositories/units";

export type CreateUnitRequest = {
  unit: Omit<Unit, "_id">;
};

export type ICreateUnitUseCase = UseCase<CreateUnitRequest, Promise<Unit>>;

@injectable()
export class CreateUnitUseCase implements ICreateUnitUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(request: CreateUnitRequest): Promise<Unit> {
    const { unit } = request;
    const createdUnit = await this.unitRepository.create(unit);

    return createdUnit;
  }
}
