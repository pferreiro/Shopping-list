import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DorpdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DorpdownDirective
  ],
  exports: [
    CommonModule,
    DorpdownDirective
  ]
})
export class ShareModule { }