import config from "../../commons/config";
import mongoose from "mongoose";

interface DatabaseMethods {
  initConnection(): Promise<void>;
}

export class Database implements DatabaseMethods {
  connection = mongoose.connection;
  name: string;
  username: string;
  password: string;

  constructor() {
    const logConnection = console.info.bind(console, "Connection: ");

    this.name = config.dbName ?? "";
    this.username = config.dbUsername ?? "";
    this.password = config.dbPassword ?? "";

    this.connection
      .on("open", () => logConnection("open"))
      .on("close", () => logConnection("close"));
  }

  async initConnection(): Promise<void> {
    await mongoose.connect(
      `mongodb+srv://${this.username}:${this.password}@${this.name}.3sculol.mongodb.net/${this.name}?retryWrites=true&w=majority`
    );
  }
}

export default new Database();
