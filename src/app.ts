import config from "./commons/config";
import Server from "./infrastructure/appServer";

const startServer = () => {
  {
    const server = new Server();
    const port = config.port ?? "3000";

    server.app.listen(port);
  }
};

startServer();
