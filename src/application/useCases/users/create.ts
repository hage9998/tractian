import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/types";
import { IUserRepository } from "../../../domain/repositories/users";

export type CreateUserRequest = {
  user: Omit<User, "_id">;
};

export type ICreateUserUseCase = UseCase<CreateUserRequest, Promise<User>>;

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(request: CreateUserRequest): Promise<User> {
    const { user } = request;
    const createdUser = await this.userRepository.create(user);

    return createdUser;
  }
}
