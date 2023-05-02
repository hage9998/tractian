import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/types";
import { IUserRepository } from "../../../domain/repositories/users";

export type UpdateUserRequest = {
  userId: string;
  user: Omit<User, "_id">;
};

export type IUpdateUserUseCase = UseCase<UpdateUserRequest, Promise<void>>;

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(request: UpdateUserRequest): Promise<void> {
    const { userId, user } = request;
    await this.userRepository.updateById(userId, user);
  }
}
