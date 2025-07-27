import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-language-controls',
  standalone: true,
  templateUrl: './theme-language-controls.component.html',
  styleUrls: ['./theme-language-controls.component.scss']
})
export class ThemeLanguageControlsComponent {
  themeWhite() {
    document.body.classList.remove('dark-theme');
  }

  themeBlack() {
    document.body.classList.add('dark-theme');
  }
}
