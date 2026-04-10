module.exports = function createLogger(appName) {
    return function log(message) {
        console.log(`[${appName}] ${message}`);
    }
}