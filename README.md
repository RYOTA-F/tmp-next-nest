# TMP Next.js × Next.js × MySQL

## Setup

1. Build

```
$ docker-compose build
```

2. Nest install

```
$ docker-compose run --rm api yarn install
```

3. Next install

```
$ docker-compose run --rm front yarn install
```

## Run

```
$ docker-compose up -d
```

## Nest

### Create API

- https://kojimanotech.com/2021/05/23/311/#outline__4

```
$ nest g module {module_name}
$ nest g controller {module_name}
$ nest g service {module_name}
```
