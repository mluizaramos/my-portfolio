import { Component } from '@angular/core';
import { BannerComponent } from "../../pages/home/banner/banner.component";
import { CertificatesComponent } from "../../pages/home/certificates/certificates.component";
import { ExperienceComponent } from "../../pages/home/experience/experience.component";
import { ProjectsComponent } from "../../pages/home/projects/projects.component";
import { SkillsComponent } from "../../pages/home/skills/skills.component";

@Component({
  selector: 'app-content',
  imports: [BannerComponent, CertificatesComponent, ExperienceComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
