import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleLogoComponent } from './simple-logo.component';

@Component({
  selector: 'logo',
  imports: [RouterLink, SimpleLogoComponent],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  template: `
    <a routerLink="/" aria-label="Brand">
      <app-simple-logo></app-simple-logo>
    </a>
  `
})
export class Logo {}
