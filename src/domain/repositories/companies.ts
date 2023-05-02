import { Company } from "../types";

export interface ICompanyRepository {
  create(company: Company): Promise<Company>;
  updateById(id: string, company: Partial<Omit<Company, "_id">>): Promise<void>;
  deleteById(id: string): Promise<void>;
  getById(id: string): Promise<Company>;
  getCompanyWithUnits(companyId: string): Promise<Company>;
  getAll(): Promise<Company[]>;
}
