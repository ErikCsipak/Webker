import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavModule } from '../nav/nav.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ResultCardComponent
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
    ResultCardComponent
  ]
})
export class ResultCardModule { }
