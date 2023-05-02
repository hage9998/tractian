import { ICompanyRepository } from "../../domain/repositories/companies";
import { Company } from "../../domain/types";
import { injectable } from "tsyringe";
import { CompanyModel } from "../../domain/models";
import { Types } from "mongoose";

@injectable()
class CompanyRepository implements ICompanyRepository {
  async create(company: Company): Promise<Company> {
    const { name, description, model } = company;

    try {
      const createdCompany = await CompanyModel.create({
        name,
        description,
        model
      });

      return {
        _id: createdCompany._id.toString(),
        ...company
      } as Company;
    } catch (error) {
      throw new Error(`Failed to create new company: ${error}`);
    }
  }

  async updateById(
    id: string,
    company: Partial<Omit<Company, "_id">>
  ): Promise<void> {
    try {
      await CompanyModel.updateOne({ _id: id }, company, {
        runValidators: true
      });
    } catch (error) {
      throw new Error(`Failed to update company: ${error}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await CompanyModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(`Failed to delete company: ${error}`);
    }
  }

  async getById(id: string): Promise<Company> {
    try {
      return await (
        await CompanyModel.findOne({ _id: id }).select("-__v")
      ).toObject();
    } catch (error) {
      throw new Error(`Failed to get company: ${error}`);
    }
  }

  async getAll(): Promise<Company[]> {
    try {
      const companies = await CompanyModel.find().select("-__v");

      return companies.map((company) => company.toObject());
    } catch (error) {
      throw new Error(`Failed to get companies: ${error}`);
    }
  }

  async getCompanyWithUnits(companyId: string): Promise<Company> {
    try {
      const company = await CompanyModel.aggregate([
        { $match: { _id: new Types.ObjectId(companyId) } },
        {
          $lookup: {
            from: "units",
            localField: "_id",
            foreignField: "company",
            as: "units"
          }
        },
        {
          $project: {
            name: 1,
            description: 1,
            model: 1,
            units: {
              _id: 1,
              name: 1,
              description: 1
            }
          }
        }
      ]);

      if (company.length > 0) return company[0];
      throw new Error("Company not found");
    } catch (error) {
      throw new Error(`Failed to get company: ${error}`);
    }
  }
}

export default CompanyRepository;
