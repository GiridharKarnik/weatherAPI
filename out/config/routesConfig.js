"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var location_1 = require("../routes/location");
var weather_1 = require("../routes/weather");
exports.default = (function (app, logger, envConfig) {
    app.use("/location", location_1.default(app, logger, envConfig));
    app.use("/weather", weather_1.default(app, logger, envConfig));
    app.get("/", function (_, res) {
        res.send("Welcome to amazing weather API");
    });
    //set up error handler
    // expressErrorHandler(app);
});
//# sourceMappingURL=routesConfig.js.map