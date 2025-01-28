Простейший пример кода (перенесен на TS)

Создаем 2 терминала, для запуска используем команды

первый терминал
- cd client && npm i
- npm run dev

второй терминал
- cd server && npm i
- создать базу, миграции, сиды (см. команды ниже)
- npm run dev

---------------------------------------------------
- "start": "node app.js",
- "dev": "nodemon app.js --ext js, jsx, json",
- "dev2": "node --watch app.js",
- "dbc": "npx sequelize db:create",
- "dbd": "npx sequelize db:drop",
- "dbm": "npx sequelize db:migrate:undo:all && npx sequelize db:migrate",
- "dbs": "npx sequelize db:seed:undo:all && npx sequelize db:seed:all",
- "dbr": "npx sequelize db:create &&  npx sequelize db:migrate && npx sequelize db:seed:all"


---------------------------------------------------
План дальнейшей реализации
- Перенос на `React Hook Form`
- возможно сделать валидацию на `Yup` (как вариант)
