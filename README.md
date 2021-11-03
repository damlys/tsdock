# `tsdock`

TypeScript starter for Node.js projects.

## Requirements

Development machine:

```shell
$ node --version
v16.13.0

$ npm --version
8.1.0

$ docker --version
Docker version 20.10.8, build 3967b7d

$ docker-compose --version
Docker Compose version v2.0.0

$ git --version
git version 2.30.1
```

Access to registries:

```shell
$ export GITHUB_TOKEN="..."
$ export NPM_TOKEN="..."

$ docker login "ghcr.io" --username="..." --password="..."
```

## Development

Copy or link example configuration file:

```shell
$ cp ./.devcontainer/docker-compose.override.yml .
$ ln -s ./.devcontainer/docker-compose.override.yml .
```

Install NPM modules:

```shell
$ npm install
$ npm run enable-git-hooks
```

Build Docker images:

```shell
$ docker-compose build
```

Run Docker containers:

```shell
$ docker-compose up --detach
```

Run tests and checks:

```shell
$ docker-compose exec http_server bash -ce "
    npm run format
    npm run lint
    npm run test
  "
```

See Docker container logs:

```shell
$ docker-compose logs http_server
```

Enter Docker container shell:

```shell
$ docker-compose exec http_server bash
```

Destroy Docker containers:

```shell
$ docker-compose down --volumes --remove-orphans
```

Versioning:

```shell
$ npm run bump-version
$ npm run release
```

## Delivery

Publish NPM module:

```shell
$ npm publish
```

Publish Docker images:

```shell
$ docker-compose push
```

## Deployment

There is no deployment procedure yet.
