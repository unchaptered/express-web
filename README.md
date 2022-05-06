# express-web

express boilerplates with jest, supertest

```json
{
    "name": "express-web",
    "version": "1.0.0",
    "license": "ISC",
    "main": "index.js",
    "author": "unchaptered",
    "description": "boiler plates",
    "keywords": [ "express", "jest", "supretest" ],
}
```

## Index

<div align="center">

| Title | Subtitle | Description | Written |
| :---: | :------- | :---------- | :------ |
| Modules | Dependencies | modules for product | \`22.05.06 |
| " | DevDependencies | modules for developement / testing | \`22.05.06 |
| Structure | src/server.js | server is singleton | \`22.05.06 |
| " | src/config/~ | configuration must be defined.  <br> 1. ConfigFactory is factory <br> 2. Config is singleton | \`22.05.06 |
| " | src/options/~ | option is two kind of option. <br> 1. database connection <br> 2. global middleware | \`22.05.06 |
| " | src/response/~ | response must maintain stable form. <br> 1. ResponseFactory is factory <br> 2. Form - SuccessForm / FailureForm is  super -sub class | \`22.05.06 |

</div>

## Modules

1. dependencies is module for product
    1. Bundler
    2. Production
2. devDependencies is module for develope
    1. Bundler
    2. Testing
    3. Development

### Dependecies

#### Bundler

- [Babel] @babel/runtime babel-plugin-add-module-exports
- [Testing] @types/jest

#### Production

- [Environemnt] dotenv
- [Express] express

### DevDependencies

#### Bundler

- [Babel] @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-flow @babel/preset-react 
- [Eslint] eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-watch 
- [Prettier] prettier

#### Testing

- [Testing] jest node-mocks-http superagent supertest faker

#### Development

- [Watcher] nodemon
- [Environemnt] cross-env

## Structure

### src/server.js

> `Only one` Server should exists as must as possible. <br>

```javascript
const createServer = () => {

    /* create express instance */

    /* connect middlewares, routes */

    return app;
     
}
```


### src/config/

> Configuration values must be defined. <br> 

1. `ConfigFactory` is factory class for get `Config` Instance
2. `Config` is sigleton class for saving configuration with validation

```javascript
class ConfigFactory {
    
    constructor() { /*throw new Error()*/ }

    static setConfigPath = (MODE) => { /* return config option */ };

    static getConfigInstance = () => { /* return Config instance*/ };

}
```

### src/options/

> Options is a kind of middleware for `global option`. <br>

1. `cors.option.js` is made for CORS issue.
2. `helmet.option.js` is made for HTTP header issue.
3. `database.option.js`  is made for CUSTOM Database connection.

### src/response/

> The Response must maintain constant form. <br>
And we expect certain situation in business logic. 

1. `ResponseFactory` is factory class for get `SuccessForm` `FailureForm`.
2. `SuccessForm` extends `Form`.
3. `FailureForm` extends `Form`.
4. `Form` contain basic forms.

```javascript
class Form {

    isSuccess;
    message;
    result;

    constructor(isSuccess, message, result) {
        this.isSuccess = isSuccess;
        this.message = message;
        this.result = result;
    }

}

class SuccessForm extends Form {

    constructor(message, result) {
        super(true, message, result);
    }

}
class FailureForm extends Form {

    constructor(message) {
        super(false, message, {});
    }
    
}
```