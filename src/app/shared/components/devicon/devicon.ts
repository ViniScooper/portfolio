import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devicon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <i [ngClass]="['devicon', 'devicon-' + name.toLowerCase(), cssClass]"></i>
  `,
  styles: [`
    .devicon {
      font-size: 24px;
    }
  `]
})
export class Devicon {
  @Input() name: string = '';
  @Input() cssClass: string = '';
}
