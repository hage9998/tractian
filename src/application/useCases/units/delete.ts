import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { IUnitRepository } from "../../../domain/repositories/units";

export type DeleteUnitRequest = {
  unitId: string;
};

export type IDeleteUnitUseCase = UseCase<DeleteUnitRequest, Promise<void>>;

@injectable()
export class DeleteUnitUseCase implements IDeleteUnitUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(request: DeleteUnitRequest): Promise<void> {
    const { unitId } = request;
    await this.unitRepository.deleteById(unitId);
  }
}
