import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppService } from '../app.service';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule
  ],
  providers: [AppService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule { }
