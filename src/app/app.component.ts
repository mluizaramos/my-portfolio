// componente raiz da aplicação - o Angular injeta ele dentro do <app-root> do index.html

import { Component } from '@angular/core';
// importa a base para criar um componente angular

import { RouterOutlet } from '@angular/router';
// importa o 'router-outlet' para ser usado no template do html

@Component({
  selector: 'app-root', // tag usada no index.html
  imports: [RouterOutlet], // aponta a que ira ser usado no html
  templateUrl: './app.component.html', // aponta para o arquivo principal do template
  styleUrl: './app.component.scss' // aponta para o arquivo de estilo principal
})
export class AppComponent {
  title = 'my-portfolio';  // só o titulo da propriedade
}
