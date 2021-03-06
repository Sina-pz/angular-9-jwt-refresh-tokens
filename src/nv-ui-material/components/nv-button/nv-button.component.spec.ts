import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvButtonComponent } from './nv-button.component';

describe('NvButtonComponent', () => {
  let component: NvButtonComponent;
  let fixture: ComponentFixture<NvButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
