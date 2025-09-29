import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeLanguageControlsComponent } from "../../shared/components/theme-language-controls/theme-language-controls.component";
import { ScreenService } from '../../shared/components/screen/screen.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  imports: [NgIf, NgClass, TranslateModule, ThemeLanguageControlsComponent],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // === Idioma ===
  languages = ['PT', 'EN', 'ES'];
  currentLanguageIndex = 0;
  currentLanguage = this.languages[this.currentLanguageIndex];

  changeLanguage() {
    this.currentLanguageIndex = (this.currentLanguageIndex + 1) % this.languages.length;
    this.currentLanguage = this.languages[this.currentLanguageIndex];
    console.log('Idioma atual:', this.currentLanguage);
    // Aqui você poderia chamar ngx-translate para realmente mudar o idioma
  }

  // === Tema ===
  theme: 'dark' | 'light' = 'dark';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    console.log('Tema atual:', this.theme);

    // Adiciona ou remove classe no body para aplicar o tema
    if (this.theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}


// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [NgIf, TranslateModule, ThemeLanguageControlsComponent],
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.scss']
// })
// export class SidebarComponent {
//   isMobile = false;

//   constructor(private screenService: ScreenService) {}

//   ngOnInit(): void {
//     this.screenService.isMobile$.subscribe((value) => {
//       this.isMobile = value;
//     });
//   }
// }
