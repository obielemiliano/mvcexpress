import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import dotenvFlow from "dotenv-flow";

if (process.env.NODE_ENV !== "production") {
  dotenvFlow.config();
  console.log("Variables cargadas:", process.env);
}

const configOptions: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306,
};

const pool = mysql.createPool(configOptions);
export default pool;
