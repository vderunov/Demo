import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
