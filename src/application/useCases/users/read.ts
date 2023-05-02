import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { User } from "../../../domain/types";
import { IUserRepository } from "../../../domain/repositories/users";

export type ListUserRequest = {
  userId: string;
};

export type IListUserUseCase = UseCase<ListUserRequest, Promise<User>>;

@injectable()
export class ListUserUseCase implements IListUserUseCase {
  private userRepository: IUserRepository;

  constructor(@inject("IUserRepository") userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(request: ListUserRequest): Promise<User> {
    const { userId } = request;
    const listedUser = await this.userRepository.getById(userId);
    if (listedUser) {
      const responseUser: User = {
        _id: listedUser._id,
        name: listedUser.name,
        age: listedUser.age,
        company: listedUser.company
      };

      return responseUser;
    }
    throw new Error("User does not exist");
  }
}
