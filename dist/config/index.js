"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envConfig_1 = __importDefault(require("./envConfig"));
const expressConfig_1 = __importDefault(require("./expressConfig"));
const routesConfig_1 = __importDefault(require("./routesConfig"));
const loggerConfig_1 = __importDefault(require("./loggerConfig"));
exports.default = (app) => {
    const env = process.env.NODE_ENV || "development";
    const envConfig = envConfig_1.default[env];
    const logger = loggerConfig_1.default(envConfig);
    expressConfig_1.default(app, envConfig);
    routesConfig_1.default(app, envConfig, logger);
    return {
        envConfig,
        logger
    };
};
//# sourceMappingURL=index.js.map