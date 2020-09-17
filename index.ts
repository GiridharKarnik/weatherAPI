  
import express from "express";
import initConfig from "./config";

const app = express();

const { envConfig, logger } = initConfig(app);

app.listen(envConfig.port, () => {
	logger.info("server is listening on port " + envConfig.port);
});