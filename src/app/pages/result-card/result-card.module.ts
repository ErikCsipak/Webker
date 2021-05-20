import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from './result-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ResultCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ResultCardComponent
  ]
})
export class ResultCardModule { }
