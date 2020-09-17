"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
const { envConfig, logger } = config_1.default(app);
app.listen(envConfig.port, () => {
    logger.info("server is listening on port " + envConfig.port);
});
//# sourceMappingURL=index.js.map