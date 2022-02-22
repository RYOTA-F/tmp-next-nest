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

## Dev

### Nest: Create API

- https://kojimanotech.com/2021/05/23/311/#outline__4

```
$ nest g module {module_name}
$ nest g controller {module_name}
$ nest g service {module_name}
```
