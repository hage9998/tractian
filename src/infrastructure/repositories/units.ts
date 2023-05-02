import { IUnitRepository } from "../../domain/repositories/units";
import { Unit } from "../../domain/types";
import { injectable } from "tsyringe";
import { UnitModel } from "../../domain/models";
import { Types } from "mongoose";

@injectable()
class UnitRepository implements IUnitRepository {
  async create(unit: Unit): Promise<Unit> {
    const { name, description, company } = unit;

    try {
      const createdUnit = await UnitModel.create({
        name,
        description,
        company
      });

      return {
        _id: createdUnit._id.toString(),
        ...unit
      } as Unit;
    } catch (error) {
      throw new Error(`Failed to create new unit: ${error}`);
    }
  }

  async updateById(
    id: string,
    unit: Partial<Omit<Unit, "owner">>
  ): Promise<void> {
    try {
      await UnitModel.updateOne({ _id: id }, unit, { runValidators: true });
    } catch (error) {
      throw new Error(`Failed to update unit: ${error}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await UnitModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(`Failed to delete unit: ${error}`);
    }
  }

  async getById(id: string): Promise<Unit> {
    try {
      return await UnitModel.findOne({ _id: id }).select("-__v").populate({
        path: "company",
        select: "name"
      });
    } catch (error) {
      throw new Error(`Failed to get unit: ${error}`);
    }
  }

  async getManyByCompanyId(companyId: string): Promise<Unit[]> {
    try {
      return await UnitModel.find({
        owner: new Types.ObjectId(companyId)
      })
        .select("-__v")
        .populate({
          path: "company",
          select: "name"
        });
    } catch (error) {
      throw new Error(`Failed to get units: ${error}`);
    }
  }

  async getAll(): Promise<Unit[]> {
    try {
      return await UnitModel.find().select("-__v").populate({
        path: "company",
        select: "name"
      });
    } catch (error) {
      throw new Error(`Failed to get units: ${error}`);
    }
  }
}

export default UnitRepository;
