# breaking-bad-wiki

Breaking Bad Angular Wiki

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Installing

Access the project and run the command `npm install`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to run the tests once.
Run `npm run test: watch` to run unit tests with the option to automatically reload and search for files.
Developed in Jest [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `npm run cypress` to execute the end-to-end tests via [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html).

The tests are available in the <b>application</b> folder.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Code Review

- Defini padrão de class para CSS para isso é aconselhável configurar `stylelint`;
- [ok] Componente header colocar a tag header;
- [ok] Pensar em componentizar mais os elementos. (exemplo o button no header);
- Pensar no lazyload nas sub-rotas;
- Cores do CSS colocar em variáveis;
- [ok] Pensar em componentizar mais como button, dropdown, card;
- [ok] Character-detail usar [detailedlist]; (https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dl)
- [ok] Criar um componente detailedlist;
- Proprio service do angular pra fazer a concatenação do queryparams;
- [ok] Rever os seletores no Cypress que escaparam e ficou na class do css;
