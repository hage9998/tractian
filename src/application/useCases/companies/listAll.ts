import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Company } from "../../../domain/types";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type IListAllCompaniesUseCase = UseCase<null, Promise<Company[]>>;

@injectable()
export class ListAllCompaniesUseCase implements IListAllCompaniesUseCase {
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(): Promise<Company[]> {
    return await this.companyRepository.getAll();
  }
}
