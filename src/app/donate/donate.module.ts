import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DonateModule { }
