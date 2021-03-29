import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvTagComponent } from './nv-tag.component';

describe('NvTagComponent', () => {
  let component: NvTagComponent;
  let fixture: ComponentFixture<NvTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
