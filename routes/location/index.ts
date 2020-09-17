import express, { Application, Request, Response, NextFunction } from "express";
import { Logger } from "winston";

import locations from "../../node_modules/cities.json/cities.json";
// import { locations } from "../../data";

function locationRoutes(app: Application, logger: Logger, envConfig: any) {
  const locationRoute = express.Router();

  locationRoute.get(
    "/",
    async (_: Request, res: Response, next: NextFunction) => {
      res.status(200).send("welcome to location route");
    }
  );

  locationRoute.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
      const searchText = req.body.searchText.toUpperCase();
      const limitTo = req.body.limitTo || 20;

      const matchedLocations = [];

      locations.some(location => {
        if (location.name.toUpperCase().startsWith(searchText)) {
          matchedLocations.push(location);
        }

        return matchedLocations.length >= limitTo;
      });

      res.status(200).send(matchedLocations);
    }
  );

  return locationRoute;
}

export default locationRoutes;
