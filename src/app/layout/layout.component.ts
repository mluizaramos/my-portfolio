import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { ContentComponent } from './content/content.component'; 

@Component({
  selector: 'app-layout',
  standalone: true, 
  imports: [
    SidebarComponent, 
    ContentComponent
  ], 
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
