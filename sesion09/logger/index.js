import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;
const { File, Console } = transports;

const logger = createLogger({
  level: "debug",

  format: combine(
    timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),

    printf(
      ({ level, message, timestamp }) => `
        ${level.toUpperCase()}:
        ${message},
        ${[new Date(timestamp).toLocaleString()]}
      `
    )
  ),

  transports: [new Console(), new File({ filename: "logs/error.log", level: "error" })],
});

export default logger;
