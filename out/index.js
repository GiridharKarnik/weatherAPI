"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var config_1 = require("./config");
var app = express_1.default();
var _a = config_1.default(app), envConfig = _a.envConfig, logger = _a.logger;
app.listen(envConfig.port, function () {
    logger.info("server is listening on port " + envConfig.port);
});
//# sourceMappingURL=index.js.map