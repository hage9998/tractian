import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Company } from "../../../domain/types";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type CreateCompanyRequest = {
  company: Omit<Company, "_id">;
};

export type ICreateCompanyUseCase = UseCase<
  CreateCompanyRequest,
  Promise<Company>
>;

@injectable()
export class CreateCompanyUseCase implements ICreateCompanyUseCase {
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(request: CreateCompanyRequest): Promise<Company> {
    const { company } = request;
    const createdCompany = await this.companyRepository.create(company);

    return createdCompany;
  }
}
