import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalUrlViewerComponent } from './external-url-viewer.component';

describe('ExternalUrlViewerComponent', () => {
  let component: ExternalUrlViewerComponent;
  let fixture: ComponentFixture<ExternalUrlViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalUrlViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalUrlViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
