"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = __importDefault(require("../routes/location"));
const weather_1 = __importDefault(require("../routes/weather"));
exports.default = (app, logger, envConfig) => {
    app.use("/location", location_1.default(app, logger, envConfig));
    app.use("/weather", weather_1.default(app, logger, envConfig));
    app.get("/", (_, res) => {
        res.send("Welcome to amazing weather API");
    });
    //set up error handler
    // expressErrorHandler(app);
};
//# sourceMappingURL=routesConfig.js.map