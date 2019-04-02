<p align="center">
  <img src="https://cdn-images-1.medium.com/max/1200/1*feM_-VHhK670LlEQekesKg.png" width="320" alt="Logo" />
</p>
  
<p align="center">A Node.js CQRS/ES Swagger API Microservice Boilerplate</p>


## Description

This is an application boilerplate that demonstrates how to use Nest.js and Event Store to create a RESTful Users API microservice.

Please note that commands have been implemented and they do write into the Event Store, however, queries for denormalized views have some boilerplate but it is up to you to implement them using your favorite database technology of choice.

In case you don't feel like downloading dependencies locally, I've added support for Docker so follow those instructions in "Running the app" and you'll have everything up and running in less than 2 minutes.

## Dependency Table
| Name        | Version           |
| ------------- |:-------------: |
| [EventStore](https://eventstore.org)      | latest |
| [Node.js](https://nodejs.org)      | Dubnium      |
| [TypeScript](https://www.typescriptlang.org) | 3      |
| [Docker Compose](https://docker.com) | 3      |

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

# analyze production mode
$ yarn start:analyze

# using with Docker
$ ./scripts/up.sh # to start
$ ./scripts/down.sh # to stop
```

## Relateds Links
Medium Article (Part 1):
https://medium.com/@qasimsoomro/building-microservices-using-node-js-with-ddd-cqrs-and-event-sourcing-part-1-of-2-52e0dc3d81df

Medium Article (Part 2):
https://medium.com/@qasimsoomro/building-microservices-using-node-js-with-ddd-cqrs-and-event-sourcing-part-2-of-2-9a5f6708e0f

Swagger Explorer URL: http://localhost:7070/api

Event Store URL: http://localhost:2113

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Release History
* 0.1.0
    * The first proper release
    * CHANGE: Minimalist users app using Event Store
* 0.0.1
    * Work in progress