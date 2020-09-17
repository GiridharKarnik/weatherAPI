"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
exports.default = (app, config) => {
    // parse application/x-www-form-urlencoded
    app.use(body_parser_1.default.urlencoded({
        extended: false
    }));
    // parse application/json
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.text());
    app.use(cors_1.default());
    app.use(morgan_1.default("dev"));
};
//# sourceMappingURL=expressConfig.js.map