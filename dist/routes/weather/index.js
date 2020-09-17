"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
function weatherRoutes(app, logger, envConfig) {
    const weatherRoute = express_1.default.Router();
    weatherRoute.post("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const lat = req.body.lat;
        const long = req.body.long;
        const options = {
            hostname: "https://api.weatherapi.com/",
            path: "v1/current.json?key=f77821cca8954c2496b190616202703&q=Bengaluru/",
            method: "POST"
        };
        try {
            const response = yield axios_1.default.post("https://api.weatherapi.com/v1/current.json?key=f77821cca8954c2496b190616202703&q=Bengaluru/");
            res.status(200).send(response);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }));
    return weatherRoute;
}
exports.default = weatherRoutes;
//# sourceMappingURL=index.js.map