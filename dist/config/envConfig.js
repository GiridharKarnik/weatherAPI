"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
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
exports.default = envConfigs;
//# sourceMappingURL=envConfig.js.map