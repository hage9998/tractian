import { container } from "tsyringe";
import {
  ICreateUnitUseCase,
  CreateUnitUseCase
} from "../../../../application/useCases/units/create";
import {
  IDeleteUnitUseCase,
  DeleteUnitUseCase
} from "../../../../application/useCases/units/delete";
import {
  IListAllUnitsUseCase,
  ListAllUnitsUseCase
} from "../../../../application/useCases/units/listAll";
import {
  IListUnitByCompanyUseCase,
  ListUnitByCompanyUseCase
} from "../../../../application/useCases/units/listByCompany";
import {
  IListUnitUseCase,
  ListUnitUseCase
} from "../../../../application/useCases/units/read";
import {
  IUpdateUnitUseCase,
  UpdateUnitUseCase
} from "../../../../application/useCases/units/update";

const registerUnitsUseCases = () => {
  // Units Use Cases

  container.registerSingleton<ICreateUnitUseCase>(
    "ICreateUnitUseCase",
    CreateUnitUseCase
  );
  container.registerSingleton<IUpdateUnitUseCase>(
    "IUpdateUnitUseCase",
    UpdateUnitUseCase
  );
  container.registerSingleton<IListUnitUseCase>(
    "IListUnitUseCase",
    ListUnitUseCase
  );
  container.registerSingleton<IDeleteUnitUseCase>(
    "IDeleteUnitUseCase",
    DeleteUnitUseCase
  );
  container.registerSingleton<IListUnitByCompanyUseCase>(
    "IListUnitByCompanyUseCase",
    ListUnitByCompanyUseCase
  );
  container.registerSingleton<IListAllUnitsUseCase>(
    "IListAllUnitsUseCase",
    ListAllUnitsUseCase
  );
};

export default registerUnitsUseCases;
