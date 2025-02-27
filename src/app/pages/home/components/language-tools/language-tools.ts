import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageToolService } from '@pages/home/components/language-tools/language-tool.service';

@Component({
  selector: 'language-tools',
  template: `
    <section class="mt-10">
      <h1 class="text-2xl dark:text-white">Languages and Tools</h1>
      <div class="flex flex-wrap h-1/2 py-6 gap-6">
        <div *ngFor="let tool of tools" class="flex flex-col items-center">
          <i [ngClass]="tool.icon" class="text-6xl"></i>
          <span class="mt-2 dark:text-white">{{ tool.name }}</span>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class LanguageTools {
  lts = inject(LanguageToolService);

  tools = [
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'PL/SQL', icon: 'devicon-oracle-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
  ];

  trackByName(index: number, item: any): string {
    return item.name;
  }
}
