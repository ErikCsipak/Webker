import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observation } from 'src/app/models/observation';
import { ObservationService } from 'src/app/services/observation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  results?= '';
  observations: Observation[] = [];

  constructor(private oService: ObservationService<Observation> ,private router: Router, private authService: AuthService, private afs: AngularFirestore ) {}
  
  ngOnInit(): void {
    if(!this.authService.authenticated()){ 
      //console.log('Autentikálatlan user, vissza a loginra')
      this.router.navigateByUrl('/login');
    }

    this.oService.get(this.observations);
    this.results = 'observation';
    
  }

  ngOnDestroy(): void {
    delete this.results;
  }
}
