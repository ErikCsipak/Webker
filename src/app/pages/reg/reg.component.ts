import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})

export class RegComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(20), Validators.required]),
    passwordCheck: new FormControl('', [Validators.minLength(6), Validators.maxLength(20), Validators.required])
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Hibás e-mail cím, vagy jelszó!',
    server: () => 'A szolgálatás nem elérhető!',
    pass: () => 'A jelszavak nem egyeznek!',
    email: () => 'Ez az e-mail már foglalt!',
    else: () => 'Valami nem stimmel!'
  }

  constructor(private router: Router, private authService: AuthService) {}

  @HostListener ('document:keydown.enter') onKeyDownHandler(){
    this.register();
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  navTo(url: string): void{
    this.router.navigateByUrl(url);
  }

  register(): void{
    if(this.form.valid){
      if(this.form.value.password === this.form.value.passwordCheck){
        this.authService.createUser(this.form.value.email, this.form.value.password).then(
          res => {
            //console.log('User létrejött, nav loginra');
            this.navTo('/login');
          },
          error =>{
            if(error.code === 'auth/user-not-found'){
              this.alertMessage=this.alertsList.user();
            } else if (error.code === 'auth/wrong-password'){
              this.alertMessage=this.alertsList.server();
            } else if (error.code === 'auth/email-already-in-use'){
              this.alertMessage = this.alertsList.email();
            } else {
              this.alertMessage = this.alertsList.else();
            }
          }
        )
      } else {
        this.alertMessage=this.alertsList.pass();
      }
    }
  }

  back(): void {
    //console.log('Vissza a loginra')
    this.router.navigateByUrl('/login');
  }

}
