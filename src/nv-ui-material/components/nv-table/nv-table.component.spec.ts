import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvTableComponent } from './nv-table.component';

describe('NvTableComponent', () => {
  let component: NvTableComponent;
  let fixture: ComponentFixture<NvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
