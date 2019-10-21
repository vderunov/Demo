import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatTabsModule, MatListModule, MatDialogModule } from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
