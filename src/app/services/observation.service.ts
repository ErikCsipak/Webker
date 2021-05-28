import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Observation } from 'src/app/models/observation';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ObservationService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  get(obsArray: Observation[]){
    this.afs.collection('Observations', ref => ref.where('subject', '==', this.authService.getCurrentUser()))
    .get().subscribe(
      res => {
        return res.docs.forEach(doc => {
          var o: Observation = {
            'resourceType': 'Observation',
            'firestoreId': doc.id,
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
            'basedOn': doc.get('basedOn'),
            'status': doc.get('status'),
            'code': doc.get('code'),
            'effectiveInstant': doc.get('effectiveInstant')
          };
          obsArray.push(o)
          //console.log(o)
        })
      },
      err =>{
        alert('Hiba a lekérésben')
      }
    )
  }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  weakAdd(obs: T) {
    return this.afs.collection('Observations').add(obs)
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    return this.afs.collection(collectionName).doc(id).update(data)
  }

  delete(collectionName: string, id: string): Promise<void> {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}