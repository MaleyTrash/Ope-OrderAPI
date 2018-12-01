# OrderAPI

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Deploying with Docker

```bash
# build Dockerfile
$ ./docker-manage.sh build
# create containers
$ ./docker-manage.sh create <NAME> <BIND_PORT>

# start containers
$ ./docker-manage.sh start <NAME>

# remove containers
$ ./docker-manage.sh rm <NAME>
```
