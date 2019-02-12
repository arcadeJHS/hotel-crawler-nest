
# Hotels Crawler

This project contains features that performs the scraping of the page `http://lecanton.com.br/` and collects the data of the available hotels.

This project used the framework [Nest](https://github.com/nestjs/nest) (TypeScript starter repository).

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>
  
<p align="center">
  A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.
</p>


## Table of Contents

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [What was learned or used in this project](#what-was-learned-or-used-in-this-project)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Missing Features to implement](#missing-features-to-implement)
- [License](#license)


## Introduction

This project has a crawler that performs scraping in the page `http://lecanton.com.br/` and collects the data of the available hotels.

This project could be used as an application backend and accessed by REST endpoints.


## Basic Usage

First you must perform the installation of the project dependencies by executing the command:

```bash
$ npm install
```

You can run the app by executing one of following commands:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

To access the main functionality of this project, you must execute a POST request to the endpoint `http://localhost:3000/hotels/buscar/`. As an example of use, you should send the following parameters to the previously mentioned endpoint:

```
{
  "checkIn": "11/02/2019",
  "checkOut": "27/02/2019"
}
```

The following commands performs the project tests:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## What was learned or used in this project

- **Typescript** features.
- **Puppeteer** features.
- REST implementation with **Nest JS**.


## Folder Structure

The folder structure of the project looks like this:

```
hotel-crawler-nest/
  src/
    hotels.controller.ts   -> class with the REST endpoint
	  hotels.service.ts      -> class with the scraping feature
	  main.ts                -> the start up script
  test/
```


## Features

- API REST endpoint.


## Missing Features to implement

- TODO.


## License

TODO.
