"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envConfig_1 = require("./envConfig");
var expressConfig_1 = require("./expressConfig");
var routesConfig_1 = require("./routesConfig");
var loggerConfig_1 = require("./loggerConfig");
exports.default = (function (app) {
    var env = process.env.NODE_ENV || "development";
    var envConfig = envConfig_1.default[env];
    var logger = loggerConfig_1.default(envConfig);
    expressConfig_1.default(app, envConfig);
    routesConfig_1.default(app, envConfig, logger);
    return {
        envConfig: envConfig,
        logger: logger
    };
});
//# sourceMappingURL=index.js.map