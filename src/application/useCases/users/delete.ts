import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../domain/repositories/users";

export type DeleteUserRequest = {
  userId: string;
};

export type IDeleteUserUseCase = UseCase<DeleteUserRequest, Promise<void>>;

@injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(request: DeleteUserRequest): Promise<void> {
    const { userId } = request;
    await this.userRepository.deleteById(userId);
  }
}
