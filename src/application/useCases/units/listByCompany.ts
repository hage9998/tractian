import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Unit } from "../../../domain/types";
import { IUnitRepository } from "../../../domain/repositories/units";

export type ListAllUnitsByCompanyRequest = {
  companyId: string;
};

export type IListUnitByCompanyUseCase = UseCase<
  ListAllUnitsByCompanyRequest,
  Promise<Unit[]>
>;

@injectable()
export class ListUnitByCompanyUseCase implements ListUnitByCompanyUseCase {
  private unitRepository: IUnitRepository;

  constructor(@inject("IUnitRepository") unitRepository: IUnitRepository) {
    this.unitRepository = unitRepository;
  }

  async execute(request: ListAllUnitsByCompanyRequest): Promise<Unit[]> {
    const { companyId: companyId } = request;
    const listedUnits = await this.unitRepository.getManyByCompanyId(companyId);

    return listedUnits;
  }
}
