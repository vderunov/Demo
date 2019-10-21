import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxModule,
  MatTabsModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
