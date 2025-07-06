// ponto de bootstrap - é aqui que a aplicação angular começa a rodar

import { bootstrapApplication } from '@angular/platform-browser';
// função para iniciar uma aplicação standalone (novo jeito moderno)

import { AppComponent } from './app/app.component';
// importa o componente raiz que sera carregado

import { appConfig } from './app/app.config';
// importa o congiguração da aplicação (rotas, zone...)

bootstrapApplication(AppComponent, appConfig)
// inicia a aplicação, carregando o AppComponent com a configuração definida
  .catch(err => console.error(err));
  // captura erros de bootstrap e exibe no console
