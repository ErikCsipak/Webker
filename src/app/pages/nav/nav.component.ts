import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  logoutHome(): void {
    this.authService.logoutHome();
  }

  logout(): void {
    console.log('kijelentkezés');
    this.authService.logout();
  }

  navToNewResult(): void{
    this.router.navigateByUrl('/newResult')
  }

}
