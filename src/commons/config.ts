import dotenv from "dotenv";

dotenv.config();

const config = {
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASS,
  port: process.env.PORT
};

export default config;
