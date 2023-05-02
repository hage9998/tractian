import { container } from "tsyringe";
import {
  ICreateCompanyUseCase,
  CreateCompanyUseCase
} from "../../../../application/useCases/companies/create";
import {
  IDeleteCompanyUseCase,
  DeleteCompanyUseCase
} from "../../../../application/useCases/companies/delete";
import {
  IListAllCompaniesUseCase,
  ListAllCompaniesUseCase
} from "../../../../application/useCases/companies/listAll";
import {
  IListCompanyWithUnitsUseCase,
  ListCompanyWithUnitsUseCase
} from "../../../../application/useCases/companies/listWithUnits";
import {
  IListCompanyUseCase,
  ListCompanyUseCase
} from "../../../../application/useCases/companies/read";
import {
  IUpdateCompanyUseCase,
  UpdateCompanyUseCase
} from "../../../../application/useCases/companies/update";

const registerCompaniesUserCases = () => {
  // Companies Use Cases

  container.registerSingleton<ICreateCompanyUseCase>(
    "ICreateCompanyUseCase",
    CreateCompanyUseCase
  );
  container.registerSingleton<IUpdateCompanyUseCase>(
    "IUpdateCompanyUseCase",
    UpdateCompanyUseCase
  );
  container.registerSingleton<IListCompanyUseCase>(
    "IListCompanyUseCase",
    ListCompanyUseCase
  );
  container.registerSingleton<IDeleteCompanyUseCase>(
    "IDeleteCompanyUseCase",
    DeleteCompanyUseCase
  );
  container.registerSingleton<IListCompanyWithUnitsUseCase>(
    "IListCompanyWithUnitsUseCase",
    ListCompanyWithUnitsUseCase
  );
  container.registerSingleton<IListAllCompaniesUseCase>(
    "IListAllCompaniesUseCase",
    ListAllCompaniesUseCase
  );
};

export default registerCompaniesUserCases;
