class Scheduler {
    constructor(logger, defaultInterval) {
        this.logger = logger;
        this.defaultInterval = defaultInterval;
    }

    scheduleTask(name, taskFunc, interval = this.defaultInterval) {
        this.logger.info(`Task "${name}" scheduled every ${interval}ms`);
        setInterval(taskFunc, interval);
    }
}

module.exports = Scheduler;