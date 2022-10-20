import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AmdbuttonsComponent } from './amdbuttons/amdbuttons.component';


@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AmdbuttonsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent,AmdbuttonsComponent]
})
export class SharedModule { }
