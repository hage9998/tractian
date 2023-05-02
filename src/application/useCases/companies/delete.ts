import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../../../domain/repositories/companies";

export type DeleteCompanyRequest = {
  companyId: string;
};

export type IDeleteCompanyUseCase = UseCase<
  DeleteCompanyRequest,
  Promise<void>
>;

@injectable()
export class DeleteCompanyUseCase implements IDeleteCompanyUseCase {
  private companyRepository: ICompanyRepository;

  constructor(
    @inject("ICompanyRepository") companyRepository: ICompanyRepository
  ) {
    this.companyRepository = companyRepository;
  }

  async execute(request: DeleteCompanyRequest): Promise<void> {
    const { companyId } = request;
    await this.companyRepository.deleteById(companyId);
  }
}
