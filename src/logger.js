const LOG_LEVELS = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
};

class Logger {
    constructor(appName, transport = console, activeLevel = 'info') {
        this.appName = appName;
        this.transport = transport;
        this.activeLevel = LOG_LEVELS[activeLevel] ?? LOG_LEVELS['info'];
    }

    log(levelName, message, options = {}) {
        if (LOG_LEVELS[levelName] < this.activeLevel) {
            return;
        }

        const timestamp = new Date().toISOString();
        const reqId = options.reqId ? `[req: ${options.reqId}] ` : '';
        const formattedMsg = `[${timestamp}] [${levelName.toUpperCase()}] [${this.appName}] ${reqId}${message}`
        
        if (this.transport[levelName] && typeof this.transport[levelName] === 'function') {
            this.transport[levelName](formattedMsg);
        } else {
            this.transport.log(formattedMsg);
        }
    }

    trace(message, options) { this.log('trace', message, options); }
    debug(message, options) { this.log('debug', message, options); }
    info(message, options) { this.log('info', message, options); }
    warn(message, options) { this.log('warn', message, options); }
    error(message, errObj = null, options = {}) {
        let finalMsg = message;
        if (errObj instanceof Error) {
            finalMsg += ` ${errObj.message}`;
        }

        this.log('error', finalMsg, options); 
    }
}

module.exports = Logger;