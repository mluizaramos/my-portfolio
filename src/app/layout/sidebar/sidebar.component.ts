import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeLanguageControlsComponent } from "../../shared/components/theme-language-controls/theme-language-controls.component";
import { ScreenService } from '../../shared/components/screen/screen.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, TranslateModule, ThemeLanguageControlsComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobile = false;

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.screenService.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }
}
