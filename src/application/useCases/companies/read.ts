import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Company } from "../../../domain/types";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type ListCompanyRequest = {
  companyId: string;
};

export type IListCompanyUseCase = UseCase<ListCompanyRequest, Promise<Company>>;

@injectable()
export class ListCompanyUseCase implements IListCompanyUseCase {
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(request: ListCompanyRequest): Promise<Company> {
    const { companyId } = request;
    const listedCompany = await this.companyRepository.getById(companyId);
    if (listedCompany) {
      const responseCompany: Company = {
        _id: listedCompany._id,
        name: listedCompany.name,
        description: listedCompany.description,
        model: listedCompany.model
      };

      return responseCompany;
    }
    throw new Error("Company does not exist");
  }
}
