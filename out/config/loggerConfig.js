"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
exports.default = (function (config) {
    var logger = winston_1.default.createLogger({
        level: config.logLevel,
        format: winston_1.default.format.json(),
        defaultMeta: { service: "user-service" },
        transports: [
            //
            // - Write to all logs with level `info` and below to `combined.log`
            // - Write all logs error (and below) to `error.log`.
            //
            new winston_1.default.transports.File({
                filename: "error.log",
                level: "error"
            }),
            new winston_1.default.transports.File({
                filename: "combined.log"
            })
        ],
        exitOnError: false
    });
    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (process.env.NODE_ENV !== "production") {
        logger.add(new winston_1.default.transports.Console({
            format: winston_1.default.format.simple()
        }));
    }
    return logger;
});
//# sourceMappingURL=loggerConfig.js.map