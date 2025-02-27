import { Component, ViewEncapsulation, inject } from '@angular/core';
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link'
import { FeatureProject } from '@pages/project/components/feature-project'
import { OtherProject } from '@pages/project/components/other-project'
@Component({
  selector: 'project-page',
  imports: [PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <div>
      <ng-container *ngFor="let project of projects">
        <feature-project [project]="project"></feature-project>
        <other-project [project]="project"></other-project>
      </ng-container>
    </div>
  `
})
export class ProjectPage {
  projectService = inject(ProjectService);
  metaService = inject(MetaService);
  projects = [
    // Seus projetos aqui
  ];
  constructor() {
    this.metaService.setMetaTags(
      `Projects - ${profileData.name}`,
      `Projects made by ${profileData.name}. Get to know all the sources.`,
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios'
      ]
    )
  }
}
