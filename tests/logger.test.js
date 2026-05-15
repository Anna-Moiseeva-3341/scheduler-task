const Logger = require('../src/logger');

test('no log messages lower than activateLevel', () => {
    const mockTransport = { log: jest.fn(), trace: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'info');

    logger.trace('This message should not be shown');
    expect(mockTransport.log).not.toHaveBeenCalled();
});

test('correct log message format', () => {
    const mockTransport = { log: jest.fn(), info: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'info');

    logger.info('Hello', { reqId: '177' });
    expect(mockTransport.info).toHaveBeenCalled();

    let recievedMsg = mockTransport.info.mock.calls[0][0];
    const logPattern = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO\] \[TestApp\] \[req: 177\] Hello$/;

    expect(recievedMsg).toMatch(logPattern);
});

test('fallback to transport.log if method does not exist', () => {
    const mockTransport = { log: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'info');

    logger.info('Hello');

    expect(mockTransport.log).toHaveBeenCalled();
});

test('correct work with trace, debug, warn', () => {
    const mockTransport = { trace: jest.fn(), debug: jest.fn(), warn: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'trace');

    logger.trace('Message1');
    logger.debug('Message2');
    logger.warn('Message3');

    expect(mockTransport.trace).toHaveBeenCalled();
    expect(mockTransport.debug).toHaveBeenCalled();
    expect(mockTransport.warn).toHaveBeenCalled();
});

test('error message with err object', () => {
    const mockTransport = { error: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'info');
    const someErr = new Error('Fail');

    logger.error('Fatal', someErr);

    expect(mockTransport.error).toHaveBeenCalledWith(expect.stringContaining('Fatal Fail'))
});

test('error message with no err object', () => {
    const mockTransport = { error: jest.fn() };
    const logger = new Logger('TestApp', mockTransport, 'info');

    logger.error('Message');

    expect(mockTransport.error).toHaveBeenCalledWith(expect.stringContaining('Message'));
});