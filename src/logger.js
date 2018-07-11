const { createLogger, format, transports, addColors } = require('winston');

addColors({
  error: 'red',
  warning: 'yellow',
  notice: 'magenta',
  info: 'green',
  debug: 'blue'
});
// Configure the Winston logger. For the complete documentation seee https://github.com/winstonjs/winston
const logger = createLogger({
  // To see more detailed errors, change this to 'debug'
  level: process.env.DEBUG_LEVEL || 'info',
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.simple(),
  ),
  transports: [
    new transports.Console()
  ],
});

module.exports = logger;
