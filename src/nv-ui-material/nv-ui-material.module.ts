import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvButtonComponent } from './components/nv-button/nv-button.component';
import { NvTableComponent } from './components/nv-table/nv-table.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NvProgressCircleComponent } from './components/nv-progress-circle/nv-progress-circle.component';



@NgModule({
  declarations: [NvButtonComponent, NvTableComponent, DemoPageComponent, NvProgressCircleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DemoPageComponent,
    NvButtonComponent,
    NvTableComponent,
  ]
})
export class NvUiMaterialModule { }
