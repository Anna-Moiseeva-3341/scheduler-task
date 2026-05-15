const Scheduler = require('../src/scheduler');

test('task executes every 10 sec', () => {
    jest.useFakeTimers();

    const mockLogger = { info: jest.fn() };
    const mockTask = jest.fn();
    const scheduler = new Scheduler(mockLogger, 10000);

    scheduler.scheduleTask('test-task', mockTask);

    expect(mockTask).not.toHaveBeenCalled();

    jest.advanceTimersByTime(10000);
    expect(mockTask).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(30000);
    expect(mockTask).toHaveBeenCalledTimes(4);
});