import { Unit } from "../types";

export interface IUnitRepository {
  create(unit: Unit): Promise<Unit>;
  updateById(id: string, unit: Partial<Omit<Unit, "_id">>): Promise<void>;
  deleteById(id: string): Promise<void>;
  getById(id: string): Promise<Unit>;
  getManyByCompanyId(companyId: string): Promise<Unit[]>;
  getAll(): Promise<Unit[]>;
}
