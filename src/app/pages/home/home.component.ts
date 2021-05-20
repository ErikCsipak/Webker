import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observation } from 'src/app/models/observation';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  observations: Observation[] = [];

  constructor(private router: Router, private authService: AuthService, private afs: AngularFirestore ) {
    
  }
  
  readData(){
    console.log(this.authService.getCurrentUser())
    this.afs.collection('Observations', ref => ref.where('subject', '==', this.authService.getCurrentUser()))
    .get().subscribe(
      res => {
        return res.docs.forEach(doc => {
          var o: Observation = {
            'resourceType': 'Observation',
            'id': doc.get('id'),
            'subject': doc.get('subject'),
            'component': [ 
              doc.get('component')[0],
              doc.get('component')[1],
              doc.get('component')[2],
              doc.get('component')[3],
              doc.get('component')[4],
              doc.get('component')[5],
              doc.get('component')[6],
              doc.get('component')[7],
              doc.get('component')[8],
              doc.get('component')[9],
              doc.get('component')[10],
              doc.get('component')[11],
              doc.get('component')[12],
              doc.get('component')[13],
              doc.get('component')[14],
              doc.get('component')[15],
              doc.get('component')[16],
              doc.get('component')[17],
              doc.get('component')[18]
            ],
            'status': doc.get('status'),
            'code': doc.get('code')
          };
          this.observations.push(o)
          console.log(o)
        })
      },
      err =>{
        console.log('Hiba a lekérésben')
      }
    )
  }
  
  ngOnInit(): void {
    if(!this.authService.authenticated()){ 
      console.log('Autentikálatlan user, vissza a loginra')
      this.router.navigateByUrl('/login');
    }
    this.readData()
  }

 
}
