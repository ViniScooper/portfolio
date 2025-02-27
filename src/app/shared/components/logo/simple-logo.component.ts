import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-logo',
  standalone: true,
  template: `
    <div class="simple-logo">
      <span class="initials">VL</span>
    </div>
  `,
  styles: [`
    .simple-logo {
      font-size: 24px;
      font-weight: bold;
      color: #3867d6;
    }
    .initials {
      font-family: Arial, sans-serif;
    }
  `]
})
export class SimpleLogoComponent {}