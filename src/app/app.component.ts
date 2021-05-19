import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { Observation } from './models/observation';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './pages/home/home.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vercukor';
  /*constructor(private afs: AngularFirestore){
    
  }
  
  saveData(){
      this.afs.collection('Observations').add(this.obs).then(res => {
        console.log('mentés sikeres', res);
      }).catch(error => {
        console.log('sikertelen mentés', error);
      })
  }*/

  

}
