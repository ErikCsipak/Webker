import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewResultComponent } from './new-result.component';
import { NavModule } from '../nav/nav.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    NewResultComponent
  ],
  imports: [
    MatDatepickerModule,
    CommonModule,
    NavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule
  ],
  exports: [
    NewResultComponent
  ]
})
export class NewResultModule { }
