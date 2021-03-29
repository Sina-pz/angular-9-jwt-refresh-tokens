import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvButtonComponent } from './components/nv-button/nv-button.component';
import { NvTableComponent } from './components/nv-table/nv-table.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { NvProgressCircleComponent } from './components/nv-progress-circle/nv-progress-circle.component';
import { NvAvatarComponent } from './components/nv-avatar/nv-avatar.component';
import { NvInitialsPipe } from './pipes/initials/nv-initials.pipe';
import { NvTrimPipe } from './pipes/trim/nv-trim.pipe';



@NgModule({
  declarations: [
    NvButtonComponent,
    NvTableComponent,
    DemoPageComponent,
    NvProgressCircleComponent,
    NvAvatarComponent,
    NvInitialsPipe,
    NvTrimPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DemoPageComponent,
    NvButtonComponent,
    NvTableComponent,
    NvProgressCircleComponent,
    NvAvatarComponent,
    NvInitialsPipe,
    NvTrimPipe
  ]
})
export class NvUiMaterialModule { }
