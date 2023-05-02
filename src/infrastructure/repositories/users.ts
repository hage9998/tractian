import { IUserRepository } from "../../domain/repositories/users";
import { User } from "../../domain/types";
import { injectable } from "tsyringe";
import { UserModel } from "../../domain/models";
import { Types } from "mongoose";

@injectable()
class UserRepository implements IUserRepository {
  async create(user: User): Promise<User> {
    const { name, age, company } = user;

    try {
      const createdUser = await UserModel.create({
        name,
        age,
        company
      });

      return {
        _id: createdUser._id.toString(),
        ...user
      } as User;
    } catch (error) {
      throw new Error(`Failed to create new user: ${error}`);
    }
  }

  async updateById(
    id: string,
    user: Partial<Omit<User, "_id">>
  ): Promise<void> {
    try {
      await UserModel.updateOne({ _id: id }, user, { runValidators: true });
    } catch (error) {
      throw new Error(`Failed to update user: ${error}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await UserModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(`Failed to delete user: ${error}`);
    }
  }

  async getById(id: string): Promise<User> {
    try {
      return await UserModel.findOne({ _id: id }).select("-__v").populate({
        path: "company",
        select: "name"
      });
    } catch (error) {
      throw new Error(`Failed to get user: ${error}`);
    }
  }

  async getManyByCompanyId(companyId: string): Promise<User[]> {
    try {
      return await UserModel.find({
        company: new Types.ObjectId(companyId)
      })
        .select("-__v")
        .populate({
          path: "company",
          select: "name"
        });
    } catch (error) {
      throw new Error(`Failed to get users: ${error}`);
    }
  }

  async getAll(): Promise<User[]> {
    try {
      return await UserModel.find().select("-__v").populate({
        path: "company",
        select: "name"
      });
    } catch (error) {
      throw new Error(`Failed to get users: ${error}`);
    }
  }
}

export default UserRepository;
