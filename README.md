# nodejs-todo-app

This project is example todo application. Developed with Rampesna/node-core.

## Installation

To use this package, NPM must be pre-installed on your system.

### Include node-modules

```shell
npm init
```

### Database Configration

Change config/database.json file and .env file according to your own information.

```shell
{
  "development": {
    "username": "root",
    "password": null,
    "database": "nodejscore",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "nodejscore",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

  "production": {
    "username": "root",
    "password": null,
    "database": "nodejscore",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

```shell
SERVER_PORT=5000
JWT_SECRET_KEY=CORE_JWT_SECRET_KEY
TOKEN_HEADER_KEY=CORE_JWT_TOKEN_HEADER_KEY

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nodejscore
DB_USERNAME=root
DB_PASSWORD=
```

Run the following command for create the tables in the database.

```shell
npx sequelize-cli db:migrate
```

Run the following command to seed admin user

```shell
npx sequelize-cli db:seed:all
```

### Testing

#### Login

```shell
curl --location --request POST 'http://HOST:PORT/api/v1/user/auth/login' \
--header 'Accept: application/json' \
--data-raw '{"email": "admin@admin.com", "password": "123456"}'
```

#### Get All Todos

```shell
curl --location --request GET 'http://HOST:PORT/api/v1/todo/getAll' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer tokenFromLoginRequest' \
```

#### Get Todo By Id

```shell
curl --location --request GET 'http://HOST:PORT/api/v1/todo/getById' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer tokenFromLoginRequest' \
--data-raw '{"id": 1}'
```

#### Create Todo

```shell
curl --location --request POST 'http://HOST:PORT/api/v1/todo/create' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer tokenFromLoginRequest' \
--data-raw '{"title": "Test Todo 1"}'
```

#### Update Todo

```shell
curl --location --request PUT 'http://HOST:PORT/api/v1/todo/update' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer tokenFromLoginRequest' \
--data-raw '{"id": 1, "title": "New Title For Update", "closed": true}'
```

#### Delete Todo

```shell
curl --location --request DELETE 'http://HOST:PORT/api/v1/todo/delete' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer tokenFromLoginRequest' \
--data-raw '{"id": 1}'
```
