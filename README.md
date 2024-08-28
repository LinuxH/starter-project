# Starter Project

## Description

This is a demo project with a NestJS backend using docker, also for local development.

## Installation

To be able to properly develop, run npm install locally so all the dependencies are there for the IDE.

```bash
$ npm install
```

The node_modules will not be used otherwise - the container runs its own npm install for dependencies.

## Running the app

You can run the app locally with support for debugging by running:

```bash
# debug
$ docker compose -f compose.debug.yaml -v up
```

The "-v" flag is short for "--renew-anon-volumes" and specifies that anonymous volumes are recreated instead of retrieving data from the previous containers. Without this, if you added a new package and rebuilt your image, it would be using the node_modules from your initial docker-compose launch.

You can also run the app in development mode without support for debugging by running:

```bash
# development
$ docker compose up
```

Or you can run in production mode by running:

```bash
# production
$ docker compose -f compose.prod.yaml up
```

Note that unlike the debug mode, both don't have an anonymous volume for node_modules, and thus don't need the "-v" flag.

TODO: To be tested: Does debug mode also work when I add a new dependency with npm install?
TODO: To be tested: Does debug mode also work with multiple modules in the src folder?
TODO: To be tested: What if I have a monorepo setup with multiple projects (e.g. mobile app, web app, backend app) so I can easily reuse code?

## Test

You can run the tests inside of docker as well. Note that the "--rm" flag removes the container again after the run.

```bash
# unit tests
$ docker compose run --rm app npm run test

# e2e tests
$ docker compose run --rm app npm run test:e2e

# test coverage
$ docker compose run --rm app npm run test:cov
```

## Helpful links, resources, and topics

Looks into Node support for TypeScript

### Authentication

https://www.reddit.com/r/node/comments/10udic4/is_it_okay_to_implement_my_own_authentication_for/

https://fusionauth.io/blog/securing-react-native-with-oauth

### Keycloak

Look into "Keycloakify"

https://rene-wilby.de/en/blog/rn-expo-oauth-authorization-code-flow-pkce-keycloak/

https://www.reddit.com/r/KeyCloak/comments/17b1ws1/how_do_you_handle_users_and_querying_when_using/

https://stackoverflow.com/questions/77652444/how-can-i-use-keycloak-login-inside-a-react-native-app-without-redirecting-the

https://www.trion.de/news/2023/06/27/keycloak-magic-links.html

https://www.reddit.com/r/KeyCloak/comments/1d1gfop/integrating_keycloak_with_reactnative/

### Docker/NestJs

Great tutorial to dockerize NestJs:
https://www.youtube.com/watch?v=a0B6MdC75z0

https://dev.to/chukwutosin_/step-by-step-guide-setting-up-a-nestjs-application-with-docker-and-postgresql-5hei

https://www.reddit.com/r/docker/comments/tv7sqs/whats_the_point_of_containerizing_a_development/

https://blog.itaywol.com/dockerizing-nestjs-application-and-debugging

https://stackoverflow.com/questions/29181032/add-a-volume-to-docker-but-exclude-a-sub-folder

https://docs.docker.com/language/nodejs/develop/

### Hosting

https://www.reddit.com/r/hetzner/comments/g4unpe/aws_vs_hetzner/

### VSCode

https://code.visualstudio.com/docs/devcontainers/containers#_create-a-devcontainerjson-file