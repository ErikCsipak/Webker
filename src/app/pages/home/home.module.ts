import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { ResultCardModule } from '../result-card/result-card.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    ResultCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
