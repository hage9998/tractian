import Server from "../../../interfaces/appServer";
import { mockCompany, mockCompanyWithUnits } from "../mocks/index";
import sinon from "sinon";
import request from "supertest";
import CompanyRepository from "../../../infrastructure/repositories/companies";
import { UpdateCompanyRequest } from "../../../application/useCases/companies/update";

describe("Test company routes", () => {
  const server = new Server();

  beforeEach(() => {
    sinon.reset();
  });

  afterEach(() => {
    sinon.restore();
  });

  test("should create a company object", async () => {
    sinon.stub(CompanyRepository.prototype, "create").resolves(mockCompany);

    const response = await request(server.app)
      .post("/tractian/company/")
      .send(mockCompany)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCompany);
  });

  test("should update a company object", async () => {
    sinon.stub(CompanyRepository.prototype, "updateById").resolves();

    const fakeUpdateObject: UpdateCompanyRequest = {
      companyId: mockCompany._id,
      company: mockCompany
    };

    const response = await request(server.app)
      .put("/tractian/company/")
      .send(fakeUpdateObject)
      .set("Accept", "application/json");

    expect(response.status).toBe(204);
  });

  test("should list a company object", async () => {
    sinon.stub(CompanyRepository.prototype, "getById").resolves(mockCompany);

    const response = await request(server.app).get(
      `/tractian/company/id/${mockCompany._id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCompany);
  });

  test("should delete a company object", async () => {
    sinon.stub(CompanyRepository.prototype, "deleteById").resolves();

    const response = await request(server.app).delete(
      `/tractian/company/${mockCompany._id}`
    );

    expect(response.status).toBe(204);
  });

  test("should get a company with its units", async () => {
    sinon
      .stub(CompanyRepository.prototype, "getCompanyWithUnits")
      .resolves(mockCompanyWithUnits);

    const response = await request(server.app).get(
      `/tractian/company/${mockCompanyWithUnits._id}/units`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockCompanyWithUnits);
  });

  test("should list all companies objects", async () => {
    sinon
      .stub(CompanyRepository.prototype, "getAll")
      .resolves([mockCompany, mockCompany]);

    const response = await request(server.app).get("/tractian/company/all/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockCompany, mockCompany]);
  });
});
