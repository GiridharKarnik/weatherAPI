"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
exports.default = (function (app, config) {
    // parse application/x-www-form-urlencoded
    app.use(body_parser_1.default.urlencoded({
        extended: false
    }));
    // parse application/json
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.text());
    app.use(cors_1.default());
    app.use(morgan_1.default("dev"));
});
//# sourceMappingURL=expressConfig.js.map