# Custom Scheduler
Планировщик задач на Node.js. Поддерживает разоичные уровни логирования: `trace`, `debug`, `info`, `warn`, `error`.

## Структура проекта
- `index.js` - точка входа
- `src/config/config.js` - настройки параметров приложения 
- `src/logger.js` - модуль логирования
- `src/scheduler.js` - модуль управления задачами
- `src/errors/errors.js` - библиотека кастомных ошибок
- `tests/` - Unit тесты приложения (Jest)

## Установка
Для установки необходимо ввести команду:
```
npm install
```

## Запуск 
Для запуска планировщика необходимо ввести команду:
```
npm start
```

## Пример вывода работы программы: 
```
[2026-05-15T21:44:02.254Z] [INFO] [CustomScheduler] App v1.0.0 started
[2026-05-15T21:44:02.261Z] [INFO] [CustomScheduler] Task "main" scheduled every 10000ms
[2026-05-15T21:44:12.272Z] [DEBUG] [CustomScheduler] [req: 52] Starting main task func
[2026-05-15T21:44:12.272Z] [INFO] [CustomScheduler] [req: 52] Main task executed successfully
```

## Завершение работы
Для завершения работы проекта необходимо нажать 
`Ctrl + C`

## Тестирование
Для запуска тестов необходимо ввести одну из указанных команд:
```
# Запуск всех тестов
npm test

# Запуск в режиме разработки
npm run test:watch
```