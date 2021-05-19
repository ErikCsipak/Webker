import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
