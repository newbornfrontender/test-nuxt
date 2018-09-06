<h1 align="center">Test Nuxt</h1>

Тестовый проект на Nuxt

<h2 align="center">Команды</h2>

### Установка зависимостей

```bash
$ yarn
```

### Запуск сервера разработки с горячей заменой модулей

```bash
$ yarn serve
```

### Сборка и минификация приложения

```bash
$ yarn build
```

### Запуск сервера в production-режиме

> Предварительно необходимо собрать приложение (yarn build)

```bash
$ yarn start
```

### Сборка приложения и генерация каждого маршрута в виде html-файла

> Использовать данную команду в случае статического хостинга

```bash
$ yarn generate
```

### Линтинг и форматирование

Prettier вызывается во время линтинга (yarn lint:fix), так как указан в качестве плагина в .eslint.js

> В development-режиме (yarn serve) проверка кода происходит каждый раз при сохранении

#### Проверка кода

> При запуске команды произойдет только линтинг кода

```bash
$ yarn lint
```

#### Проверка кода и исправление ошибок

> При запуске команды произойдет линтинг, исправление и форматирование кода

```bash
$ yarn lint:fix
```

<h2 align="center">Лицензия</h2>

<a title="Лицензия" href="/LICENSE" hreflang="en">MIT</a>
