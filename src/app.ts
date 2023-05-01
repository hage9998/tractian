import config from "./commons/config";
import Server from "./infrastructure/appServer";
import dbInstance from "./infrastructure/database";

const startServer = () => {
  {
    dbInstance.initConnection();
    const server = new Server();
    const port = config.port ?? "3000";

    server.app.listen(port);
  }
};

startServer();
