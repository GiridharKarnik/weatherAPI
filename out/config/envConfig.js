"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var rootPath = path.normalize(__dirname + "/../");
var envConfigs = {
    development: {
        rootPath: rootPath,
        db: "mongodb://writer:Password1@localhost:27017/package_project",
        host: "127.0.0.1",
        port: process.env.PORT || 3030,
        env: "dev",
        logLevel: "debug"
    },
    test: {
        rootPath: rootPath,
        db: "mongodb://localhost:27017/package_project",
        host: "127.0.0.1",
        port: process.env.PORT || 3030,
        env: "test",
        logLevel: "debug"
    },
    prod: {
        rootPath: rootPath,
        db: "mongodb://writer:Password1@localhost:27017/package_project",
        host: "127.0.0.1",
        port: process.env.PORT || 3030,
        env: "prod",
        logLevel: "debug"
    }
};
exports.default = envConfigs;
//# sourceMappingURL=envConfig.js.map