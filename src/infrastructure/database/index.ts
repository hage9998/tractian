import mongoose from "mongoose";

interface DatabaseMethods {
  initConnection(
    username: string,
    password: string,
    databaseName: string
  ): Promise<void>;
}

export class Database implements DatabaseMethods {
  connection = mongoose.connection;

  constructor() {
    const dataBaseConnection = console.info.bind(console, "Connection: ");

    this.connection
      .on("open", console.info.bind(console, dataBaseConnection("open")))
      .on("close", console.info.bind(console, dataBaseConnection("close")));
  }

  async initConnection(
    username: string,
    password: string,
    databaseName: string
  ): Promise<void> {
    await mongoose.connect(
      `mongodb+srv://${username}:<${password}>@${databaseName}.3sculol.mongodb.net/?retryWrites=true&w=majority`
    );
  }
}

export default new Database();
