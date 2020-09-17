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
const cities_json_1 = __importDefault(require("../../node_modules/cities.json/cities.json"));
// import { locations } from "../../data";
function locationRoutes(app, logger, envConfig) {
    const locationRoute = express_1.default.Router();
    locationRoute.get("/", (_, res, next) => __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("welcome to location route");
    }));
    locationRoute.post("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const searchText = req.body.searchText.toUpperCase();
        const limitTo = req.body.limitTo || 20;
        const matchedLocations = [];
        cities_json_1.default.some(location => {
            if (location.name.toUpperCase().startsWith(searchText)) {
                matchedLocations.push(location);
            }
            return matchedLocations.length >= limitTo;
        });
        res.status(200).send(matchedLocations);
    }));
    return locationRoute;
}
exports.default = locationRoutes;
//# sourceMappingURL=index.js.map