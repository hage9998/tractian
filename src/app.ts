import "reflect-metadata";
import config from "./commons/config";
import dbInstance from "./infrastructure/database";
import Server from "./interfaces/appServer";

const startServer = () => {
  {
    dbInstance.initConnection();
    const server = new Server();
    const port = config.port ?? "3000";

    server.app.listen(port);
    console.log(`Server started on port ${port}`);
  }
};

startServer();
