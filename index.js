const config = require('./src/config/config');
const Logger = require('./src/logger');
const Scheduler = require('./src/scheduler');

const logger = new Logger(config.appName, console, config.logLevel);
const scheduler = new Scheduler(logger, config.defaultInterval);

logger.info(`App v${config.version} started`);

const mainTask = () => {
    const reqId = Math.floor(Math.random() * 100);
    logger.debug('Starting main task func', { reqId });

    try {
        logger.info('Main task executed successfully', { reqId });
    } catch (err) {
        logger.error('Task failed', err, { reqId });
    }
};

scheduler.scheduleTask('main', mainTask);