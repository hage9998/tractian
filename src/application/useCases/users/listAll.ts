import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/types";
import { IUserRepository } from "../../../domain/repositories/users";

export type IListAllUsersUseCase = UseCase<null, Promise<User[]>>;

@injectable()
export class ListAllUsersUseCase implements IListAllUsersUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getAll();
  }
}
