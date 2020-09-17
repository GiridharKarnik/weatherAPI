import * as path from "path";
const rootPath = path.normalize(__dirname + "/../");

const envConfigs = {
  development: {
    rootPath,
    db: "mongodb://writer:Password1@localhost:27017/package_project",
    host: "127.0.0.1",
    port: process.env.PORT || 3030,
    env: "dev",
    logLevel: "debug"
  },
  test: {
    rootPath,
    db: "mongodb://localhost:27017/package_project",
    host: "127.0.0.1",
    port: process.env.PORT || 3030,
    env: "test",
    logLevel: "debug"
  },
  prod: {
    rootPath,
    db: "mongodb://writer:Password1@localhost:27017/package_project",
    host: "127.0.0.1",
    port: process.env.PORT || 3030,
    env: "prod",
    logLevel: "debug"
  }
};

export default envConfigs;
