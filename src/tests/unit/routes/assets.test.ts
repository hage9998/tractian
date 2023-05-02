import { mockAsset } from "../mocks/index";
import sinon from "sinon";
import request from "supertest";
import Server from "../../../infrastructure/appServer";
import AssetRepository from "../../../infrastructure/repositories/assets";
import { UpdateAssetRequest } from "../../../application/useCases/assets/update";

describe("Test asset routes", () => {
  const server = new Server();

  beforeEach(() => {
    sinon.reset();
  });

  afterEach(() => {
    sinon.restore();
  });

  test("should create a asset object", async () => {
    sinon.stub(AssetRepository.prototype, "create").resolves(mockAsset);

    const response = await request(server.app)
      .post("/tractian/asset/")
      .send(mockAsset)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockAsset);
  });

  test("should update a asset object", async () => {
    sinon.stub(AssetRepository.prototype, "updateById").resolves();

    const fakeUpdateObject: UpdateAssetRequest = {
      assetId: mockAsset._id,
      asset: mockAsset
    };

    const response = await request(server.app)
      .put("/tractian/asset/")
      .send(fakeUpdateObject)
      .set("Accept", "application/json");

    expect(response.status).toBe(204);
  });

  test("should list a asset object", async () => {
    sinon.stub(AssetRepository.prototype, "getById").resolves(mockAsset);

    const response = await request(server.app).get(
      `/tractian/asset/id/${mockAsset._id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockAsset);
  });

  test("should delete a asset object", async () => {
    sinon.stub(AssetRepository.prototype, "deleteById").resolves();

    const response = await request(server.app).delete(
      `/tractian/asset/${mockAsset._id}`
    );

    expect(response.status).toBe(204);
  });

  test("should delete a asset object", async () => {
    sinon
      .stub(AssetRepository.prototype, "getManyByOwnerId")
      .resolves([mockAsset, mockAsset]);

    const response = await request(server.app).get(
      `/tractian/asset/owner/${mockAsset.owner}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockAsset, mockAsset]);
  });

  test("should list all assets objects", async () => {
    sinon
      .stub(AssetRepository.prototype, "getAll")
      .resolves([mockAsset, mockAsset]);

    const response = await request(server.app).get("/tractian/asset/all/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockAsset, mockAsset]);
  });
});
