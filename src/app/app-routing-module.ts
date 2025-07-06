// esse arquivo define as rotas da aplicação

import { LayoutComponent } from './layout/layout.component';
// importa o html/ts/scss da rota/tela principal

import { Routes } from '@angular/router';
// 'routes' é um tipo auxiliar do angular que define as rotas disponiveis

export const routes: Routes = [
  {
    path: '', // rota '/'
    component: LayoutComponent, // componente principal 
    // quando o user acessar '/' sera exibido a LayoutComponent (html/ts/scss principais)
  },
  { path: '**', redirectTo: '' }, // qualquer rota inválida sera redirecionada para a raiz
];