# Boilerplates

[**Github Repo unchpatered/express-web**](https://github.com/unchaptered/express-web) 의 보일러 플레이트를 기반으로 개발하였습니다.

1. Usage | 사용법
2. Dependencies | 의존성 모듈 항목
3. Modules' Role | 모듈별 역할

## Usage

git 혹은 npx 을 이용해서 해당 프로젝트를 사용할 수 있습니다.


### git

```
mkdir project
cd project
git clone https://github.com/unchaptered/express-web
npm i
```

### npx

```
npx degit unchaptered/express-web project
cd project
npm i
```

## Dependencies

npm i 시 문제가 생긴되면 다음의 절차를 따라주세요.

1. node_modules/ 제거
2. package-lock.json 제거
3. package.json 안에 항목 확인
4. 누락 항목을 아래 모듈에서 찾고 npm i (-D) / 혹은 전부 npm i (-D)
5. 반복

위 절차로 해결되지 않는다면 각 모듈의 버전을 확인하고 코멘트를 달아주세요.

### Dependencies

1. 필수항목 Babel, Enviroment, Application
2. 선택항목 Secure Option, DB Connection, Logger

- [✅][Babel] @babel/runtime @types/jest babel-plugin-add-module-exports

- [✅][Enviroment] dotenv

- [✅][Applications] express
- [✅][Secure Option] cors helmet bcrypt

- [✅][DB Connection] mongoose redis
- [✅][Logger] morgan winston winston-daily-rotate-file
 
### DevDependencies

1. 필수항목 Babel, Enviroment, Watcher, Test
2. 선택항목 Faker

- [✅][Babel] @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-flow eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-watch prettier @babel/preset-react 

- [✅][Test] jest supertest superagent supertest-as-promised node-mocks-http

- [✅][Enviroment] corss-env
- [✅][Watcher] nodemon
- [✅][Faker] faker@5.5.3

## Modules' Role

1. Develope | 어플리케이션 관련 모듈 설명
2. Settings | 개발 설정 관련 모듈 설명

### Develope

#### Applications + Secure Options

Express 공식 문서 혹은 일반적으로 사용하는 모듈들을 포함하고 있습니다.

#### DB Connection

MongoDB, Redis 를 연결하기 위해서 mongoose, redis 모듈을 설치하였습니다.
DB 환경이 다르다면 다른 모듈을 설치하면 됩니다.

#### Logger

아래에 서술한 NODE_ENV 에 따라서 별도의 Logger 를 적용하였습니다.
스위칭은 되지만 적용은 하지 않은 상태로 미확정된 부분입니다.
제거하시는 것을 권고드립니다.

### Settings

#### Cross-env / Env

배포, 개발, 테스트 환경 별로 환경변수를 별도로 설정해야 할 필요가 있습니다.

package.json script 안에 cross-env 를 이용하여 NODE_ENV 를 설정해주고
config.options.js 안에서 env 를 이용하여 NODE_ENV 별로 별도의 .env.path 를 설정해주도록 하였습니다.

#### Babel

공식문서에는 `Babel is JavaScript Compiler` 라고 소개 되어 있습니다.

_압축 및 난수화 기능을 제외하고 보겠습니다._
브라우저 환경 혹은 특정한 모듈은 아직 ES6+ 와 같은 최신 문법이 지원되지 않습니다.
따라서 해당 모듈을 사용하기 위해서는 ES5- 이전의 문법으로 컴파일 할 필요가 있습니다.

Babel 은 이러한 기능을 담당하고 있습니다.

#### Test

단위 테스트 및 통합 테스트를 하기 위하여 각각 jest, supertest 모듈을 사용하였습니다.
그 외에 추가적인 의존성 모듈을 설치하고 req, res 등의 목업을 위해서 node-mocks-http 를 사용하였습니다.

#### Watcher

Nodemon 은 프로젝트 경로 상에 있는 모든 *.js 파일을 추적하고 이 파일이 수정되면 스크립트를 재실행시켜줍니다.

#### Faker

_개발자가 최신 버전을 삭제하고 날랐기 떄문에_
Faker 는 더미 데이터 생산을 도와주는 라이브러리이며 @5.5.3 버전으로 설치하였습니다.
