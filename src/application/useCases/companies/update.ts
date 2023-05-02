import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Company } from "../../../domain/types";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type UpdateCompanyRequest = {
  companyId: string;
  company: Omit<Company, "_id">;
};

export type IUpdateCompanyUseCase = UseCase<
  UpdateCompanyRequest,
  Promise<void>
>;

@injectable()
export class UpdateCompanyUseCase implements IUpdateCompanyUseCase {
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(request: UpdateCompanyRequest): Promise<void> {
    const { companyId, company } = request;
    await this.companyRepository.updateById(companyId, company);
  }
}
