import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Company } from "../../../domain/types";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type ListCompanyWithUnitsRequest = {
  companyId: string;
};

export type IListCompanyWithUnitsUseCase = UseCase<
  ListCompanyWithUnitsRequest,
  Promise<Company>
>;

@injectable()
export class ListCompanyWithUnitsUseCase
  implements IListCompanyWithUnitsUseCase
{
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(request: ListCompanyWithUnitsRequest): Promise<Company> {
    const { companyId } = request;
    const listedCompany = await this.companyRepository.getCompanyWithUnits(
      companyId
    );

    return listedCompany;
  }
}
