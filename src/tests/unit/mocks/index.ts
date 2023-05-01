import { Asset } from "./../../../domain/types";

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
