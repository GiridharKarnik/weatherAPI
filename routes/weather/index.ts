import express, { Application, Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import axios from "axios";

function weatherRoutes(app: Application, logger: Logger, envConfig: any) {
  const weatherRoute = express.Router();

  weatherRoute.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
      const lat = req.body.lat;
      const long = req.body.long;

      try {
        const response = await axios.post(
          "http://api.weatherapi.com/v1/forecast.json",
          {},
          {
            params: {
              key: "f77821cca8954c2496b190616202703",
              q: `${lat},${long}`,
              days: 3
            },
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        res.status(200).send(response.data);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  );

  return weatherRoute;
}

export default weatherRoutes;
