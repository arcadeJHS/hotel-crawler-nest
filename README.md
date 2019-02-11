<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  </a>
</p>
  
<p align="center">
  A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.
</p>


## Description

Projeto que realiza o scraping da pagina `http://lecanton.com.br/` e coleta os dados dos hoteis disponiveis.

Este projeto utilizou o framework [Nest](https://github.com/nestjs/nest) (TypeScript starter repository).

Para utilizar a funcionalidade principal desse projeto, basta realizar uma requisição POST para o endpoint `http://localhost:3000/hotels/buscar/`.

Como exemplo de uso, deve-se enviar os seguintes parametros para o referido endpoint:

```
{
	"checkIn": "11/02/2019",
	"checkOut": "27/02/2019"
}
```


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

# production mode
$ npm run start:prod
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
