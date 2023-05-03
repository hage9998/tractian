import Server from "../../../interfaces/appServer";
import { mockUser } from "../mocks/index";
import sinon from "sinon";
import request from "supertest";
import UserRepository from "../../../infrastructure/repositories/users";
import { UpdateUserRequest } from "../../../application/useCases/users/update";

describe("Test user routes", () => {
  const server = new Server();

  beforeEach(() => {
    sinon.reset();
  });

  afterEach(() => {
    sinon.restore();
  });

  test("should create a user object", async () => {
    sinon.stub(UserRepository.prototype, "create").resolves(mockUser);

    const response = await request(server.app)
      .post("/tractian/user/")
      .send(mockUser)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });

  test("should update a user object", async () => {
    sinon.stub(UserRepository.prototype, "updateById").resolves();

    const fakeUpdateObject: UpdateUserRequest = {
      userId: mockUser._id,
      user: mockUser
    };

    const response = await request(server.app)
      .put("/tractian/user/")
      .send(fakeUpdateObject)
      .set("Accept", "application/json");

    expect(response.status).toBe(204);
  });

  test("should list a user object", async () => {
    sinon.stub(UserRepository.prototype, "getById").resolves(mockUser);

    const response = await request(server.app).get(
      `/tractian/user/id/${mockUser._id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });

  test("should delete a user object", async () => {
    sinon.stub(UserRepository.prototype, "deleteById").resolves();

    const response = await request(server.app).delete(
      `/tractian/user/${mockUser._id}`
    );

    expect(response.status).toBe(204);
  });

  test("should get many users objects by company", async () => {
    sinon
      .stub(UserRepository.prototype, "getManyByCompanyId")
      .resolves([mockUser, mockUser]);

    const response = await request(server.app).get(
      `/tractian/user/company/${mockUser.company}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockUser, mockUser]);
  });

  test("should list all users objects", async () => {
    sinon
      .stub(UserRepository.prototype, "getAll")
      .resolves([mockUser, mockUser]);

    const response = await request(server.app).get("/tractian/user/all/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([mockUser, mockUser]);
  });
});
