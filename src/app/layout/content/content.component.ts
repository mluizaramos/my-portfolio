import { Component } from '@angular/core';
import { BannerComponent } from "../../pages/home/banner/banner.component";
import { CertificatesComponent } from "../../pages/home/certificates/certificates.component";
import { ExperienceComponent } from "../../pages/home/experience/experience.component";
import { ProjectsComponent } from "../../pages/home/projects/projects.component";
import { SkillsComponent } from "../../pages/home/skills/skills.component";
import { ThemeLanguageControlsComponent } from "../../shared/components/theme-language-controls/theme-language-controls.component";
import { ScreenService } from '../../shared/components/screen/screen.component';
import { NgIf } from '@angular/common';
import { FooterComponent } from "../../pages/home/footer/footer.component";

@Component({
  selector: 'app-content',
  imports: [NgIf, BannerComponent, CertificatesComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ThemeLanguageControlsComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  isMobile = false;

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.screenService.isMobile$.subscribe((value) => {
      this.isMobile = value;
    });
  }
}
