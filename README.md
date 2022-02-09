# TMP Next.js × Next.js

## Setup

- Nest

```
$ docker-compose run --rm server yarn install
```

### Create API

- https://kojimanotech.com/2021/05/23/311/#outline__4

```
$ nest g module {module_name}
$ nest g controller {module_name}
$ nest g service {module_name}
```

### Create Table

#### Create Entity

```
$ npx typeorm entity:create --name Test
```

#### Create Migration

```
$ npx typeorm migration:create -n PostRefactoring -d src/migration
```

#### Migration Run

```
$ npx typeorm migration:run
```
