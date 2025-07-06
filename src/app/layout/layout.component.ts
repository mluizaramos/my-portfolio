import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout', // declara um componente standalone chamado app-layout
  standalone: true,
  imports: [
    SidebarComponent, 
    ContentComponent, 
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isMobile = false; // isMobile: diz se a tela é mobile
  isMobileSidebarOpen = false; // isMobileSidebarOpen: diz se o menu mobile está aberto

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize') // escuta o evento resize da janela
  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768; // se a largura for menor que 768px, define isMobile = true
    if (!this.isMobile) {
      this.isMobileSidebarOpen = false; // fecha o menu se voltou para desktop
    }
  }

  // abre ou fecha o menu mobile com clique no botão menu hambúrguer
  toggleSidebar(): void {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen; 
  }
}
