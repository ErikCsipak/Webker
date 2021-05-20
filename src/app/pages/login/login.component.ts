import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás e-mail cím, vagy jelszó!',
    server: () => 'A szolgálatás nem elérhető!',
    false: () => ''
  }

  @HostListener ('document:keydown.enter') onKeyDownHandler(){
    console.log('Enter lenyomva')
    this.login();
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  navTo(url: string): void{
    this.router.navigateByUrl(url);
  }

  navToRegister(){
    console.log('Regisztrációs lapra ugrás')
    this.router.navigate(['/reg']);
  }

  login(){
    if(this.form.valid){
      this.authService.login(this.form.value.email, this.form.value.password1).then(
        res => {
          console.log('Bejelentkezve');
          this.navTo('/home');
        },
        error =>{
          this.alertMessage=(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
            ? this.alertsList.user(): this.alertsList.server();
        }
      )
     
    }
  }
}
