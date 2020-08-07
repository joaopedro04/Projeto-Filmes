import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import {MatTabsModule} from '@angular/material/tabs';

import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    ListModule
  ],
  exports: [GenresComponent]
})
export class GenresModule { }
