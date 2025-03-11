import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLogoComponent } from './components/logo/simple-logo.component';

@NgModule({
  declarations: [
    SimpleLogoComponent,
    // outros componentes
  ],
  imports: [
    CommonModule,
    // outros módulos
  ],
  exports: [
    SimpleLogoComponent,
    // outros componentes
  ]
})
export class SharedModule {}
















