import dotenv from "dotenv";
import Server from "./infrastructure/appServer";

const startServer = () => {
  dotenv.config();
  const server = new Server();
  const port = process.env.PORT ?? "3000";

  server.app.listen(port);
};

startServer();
