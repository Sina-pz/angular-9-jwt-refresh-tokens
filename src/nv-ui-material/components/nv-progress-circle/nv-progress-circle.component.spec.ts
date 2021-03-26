import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvProgressCircleComponent } from './nv-progress-circle.component';

describe('NvProgressCircleComponent', () => {
  let component: NvProgressCircleComponent;
  let fixture: ComponentFixture<NvProgressCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvProgressCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvProgressCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
