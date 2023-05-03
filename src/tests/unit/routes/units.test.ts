import Server from "../../../interfaces/appServer";
import { mockUnit } from "../mocks/index";
import sinon from "sinon";
import request from "supertest";
import UnitRepository from "../../../infrastructure/repositories/units";
import { UpdateUnitRequest } from "../../../application/useCases/units/update";

describe("Test unit routes", () => {
  const server = new Server();

  beforeEach(() => {
    sinon.reset();
  });

  afterEach(() => {
    sinon.restore();
  });

  test("should create a unit object", async () => {
    sinon.stub(UnitRepository.prototype, "create").resolves(mockUnit);

    const response = await request(server.app)
      .post("/tractian/unit/")
      .send(mockUnit)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUnit);
  });

  test("should update a unit object", async () => {
    sinon.stub(UnitRepository.prototype, "updateById").resolves();

    const fakeUpdateObject: UpdateUnitRequest = {
      unitId: mockUnit._id,
      unit: mockUnit
    };

    const response = await request(server.app)
      .put("/tractian/unit/")
      .send(fakeUpdateObject)
      .set("Accept", "application/json");

    expect(response.status).toBe(204);
  });

  test("should list a unit object", async () => {
    sinon.stub(UnitRepository.prototype, "getById").resolves(mockUnit);

    const response = await request(server.app).get(
      `/tractian/unit/id/${mockUnit._id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUnit);
  });

  test("should delete a unit object", async () => {
    sinon.stub(UnitRepository.prototype, "deleteById").resolves();

    const response = await request(server.app).delete(
      `/tractian/unit/${mockUnit._id}`
    );

    expect(response.status).toBe(204);
  });

  test("should get many units objects by company", async () => {
    sinon
      .stub(UnitRepository.prototype, "getManyByCompanyId")
      .resolves([mockUnit, mockUnit]);

    const response = await request(server.app).get(
      `/tractian/unit/company/${mockUnit.company}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockUnit, mockUnit]);
  });

  test("should list all units objects", async () => {
    sinon
      .stub(UnitRepository.prototype, "getAll")
      .resolves([mockUnit, mockUnit]);

    const response = await request(server.app).get("/tractian/unit/all/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockUnit, mockUnit]);
  });
});
