import dotenv from "dotenv";
import { Sequelize } from "sequelize";
// dotenv.config({ path: "../../.env" });
// import "../../.env";
dotenv.config();
export const dbConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

const env = process.env.NODE_ENV || "development";
export const cSequelize = new Sequelize(dbConfig[env]);

// Can be done like this, but production level is one implemented above
// export const cSequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: console.log(),
//   }
// );
