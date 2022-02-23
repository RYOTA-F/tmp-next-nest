# TMP Next.js × Next.js × MySQL

## Setup

1. Env

   a. Copy .env

   ```
   $ cp .env_example .env
   ```

   b. Edit .env

2. Build

```
$ docker-compose build
```

3. Nest install

```
$ docker-compose run --rm api yarn install
```

4. Next install

```
$ docker-compose run --rm front yarn install
```

5. TypeORM Migration

```
$ docker-compose run --rm api yarn migration:r
```

6. TypeORM Seed Run

```
$ docker-compose run --rm api yarn seed:r
```

---

## Run

### Docker Run

```
$ docker-compose up -d
```

### Front

```
localhost:8080/
```

### Storybook

```
localhost:6006/
```

### API

```
localhost:3000/
```

---

## TypeORM

### Migration Generate

```
$ docker-compose run --rm api yarn migration:g {Model}Migration
```

### Migration Run

```
$ docker-compose run --rm api yarn migration:r
```

### Seed Run

```
$ docker-compose run --rm api yarn seed:r
```

## Nest: Create API

```
$ nest g module {module_name}
$ nest g controller {module_name}
$ nest g service {module_name}
```
