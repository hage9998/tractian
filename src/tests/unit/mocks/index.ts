import { Asset, Company, Unit, User } from "./../../../domain/types";

export const mockAsset: Asset = {
  _id: "TestId1",
  name: "Test",
  description: "Test Descrption",
  model: "TestModel",
  status: "Running",
  healthLevel: 50,
  image: "www.image.com",
  owner: "TestOwner"
};

export const mockUser: User = {
  _id: "TestId1",
  name: "Test",
  age: 35,
  company: "Test company"
};

export const mockUnit: Unit = {
  _id: "TestId1",
  name: "Test",
  description: "Test Descrption",
  company: "Test company"
};

export const mockCompany: Company = {
  _id: "TestId1",
  name: "Test",
  description: "Test Descrption",
  model: "Test Company"
};

export const mockCompanyWithUnits: Company & { units: Partial<Unit>[] } = {
  _id: "TestId1",
  name: "Test",
  description: "Test Descrption",
  model: "Test Company",
  units: [{ name: mockUnit.name }]
};
