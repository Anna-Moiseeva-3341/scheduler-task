const config = require ('./config');
const createLogger = require ('./logger');

const log = createLogger(config.appName);
log(`scheduler.js started v${config.version}`);

function scheduleTask(name, interval = config.defaultInterval, task = () => {}) {
    log(`Task "${name}" scheduled every ${interval}ms`);
    setInterval(task, interval);
}

scheduleTask('running', 10000, () => {
    log('running');
});