import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './pages/login/login.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegModule } from './pages/reg/reg.module';
import { NavModule } from './pages/nav/nav.module';
import { ResultCardModule } from './pages/result-card/result-card.module';
import { NewResultModule } from './pages/new-result/new-result.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HomeModule,
    LoginModule,
    RegModule,
    NavModule,
    ResultCardModule,
    AppRoutingModule,
    AngularFireAuthModule,
    NewResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
