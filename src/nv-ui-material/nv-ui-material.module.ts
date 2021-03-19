import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvButtonComponent } from './components/nv-button/nv-button.component';
import { NvTableComponent } from './components/nv-table/nv-table.component';
import { DemoPageComponent } from './demo-page/demo-page.component';



@NgModule({
  declarations: [NvButtonComponent, NvTableComponent, DemoPageComponent],
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
