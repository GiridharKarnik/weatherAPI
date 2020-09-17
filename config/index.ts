import envConfigs from "./envConfig";
import expressConfig from "./expressConfig";
import routesConfig from "./routesConfig";
import loggerConfig from "./loggerConfig";

export default (app) => {
	const env = process.env.NODE_ENV || "development";

	const envConfig = envConfigs[env];

	const logger = loggerConfig(envConfig);
	expressConfig(app, envConfig);
	routesConfig(app, envConfig, logger);

	return {
		envConfig,
		logger
	};
};