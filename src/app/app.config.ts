// nesse arquivo é definido os provedores globais

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// o aplicationConfig: é o tipo do objeto de configuração do angular e provideRouter: configuração de como o angular lida com mudanças

import { provideRouter } from '@angular/router';
// ativa o roteamento no modo standalone (angular moderno)

import { routes } from './app-routing-module';
// importa o arquivo com as rotas definidas

import { translationProviders } from './translate.config';
// importa a função padrao de tradução

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // otimiza o desempenho ignorando eventos redundantes do DOM
    provideRouter(routes), // registra as rotas da aplicação
    ...translationProviders, // adicionar a tradução
  ],
};
