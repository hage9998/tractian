import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/types";
import { IUserRepository } from "../../../domain/repositories/users";

export type ListAllUsersByCompanyRequest = {
  companyId: string;
};

export type IListUserByCompanyUseCase = UseCase<
  ListAllUsersByCompanyRequest,
  Promise<User[]>
>;

@injectable()
export class ListUserByCompanyUseCase implements ListUserByCompanyUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(request: ListAllUsersByCompanyRequest): Promise<User[]> {
    const { companyId } = request;
    const listedUsers = await this.userRepository.getManyByCompanyId(companyId);

    return listedUsers;
  }
}
