import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Unit } from "../../../domain/types";
import { IUnitRepository } from "../../../domain/repositories/units";

export type IListAllUnitsUseCase = UseCase<null, Promise<Unit[]>>;

@injectable()
export class ListAllUnitsUseCase implements IListAllUnitsUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(): Promise<Unit[]> {
    return await this.unitRepository.getAll();
  }
}
