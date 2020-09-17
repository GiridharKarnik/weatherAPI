import locationRoute from "../routes/location";
import weatherRoute from "../routes/weather";

export default (app, logger, envConfig) => {
  app.use("/location", locationRoute(app, logger, envConfig));
  app.use("/weather", weatherRoute(app, logger, envConfig));

  app.get("/", (_, res) => {
    res.send("Welcome to amazing weather API");
  });

  //set up error handler
  // expressErrorHandler(app);
};
