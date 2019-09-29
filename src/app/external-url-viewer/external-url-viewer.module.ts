import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalUrlViewerComponent } from './external-url-viewer.component';

@NgModule({
  declarations: [ExternalUrlViewerComponent],
  imports: [
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ExternalUrlViewerComponent]
})
export class ExternalUrlViewerModule { }
