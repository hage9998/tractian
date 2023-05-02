import { User } from "../types";

export interface IUserRepository {
  create(user: User): Promise<User>;
  updateById(id: string, user: Partial<Omit<User, "_id">>): Promise<void>;
  deleteById(id: string): Promise<void>;
  getById(id: string): Promise<User>;
  getManyByCompanyId(companyId: string): Promise<User[]>;
  getAll(): Promise<User[]>;
}
