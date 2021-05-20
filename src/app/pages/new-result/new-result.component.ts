import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.scss']
})
export class NewResultComponent implements OnInit {

  form: FormGroup = new FormGroup({
    WBC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    RBC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    HGB: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    HCT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    MCV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    MCH: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    MCHC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    PLT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    RDWSD: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    RDWCV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    PDW: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    MPV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    PCT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    NEUT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    LYMPH: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    MONO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    EO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    BASO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    IG: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    DATE: new FormControl()
  });

  constructor(private router: Router, private authService: AuthService, private afs: AngularFirestore) { }
  
  saveData(){
      /*this.afs.collection('Observations').add(this.obs).then(res => {
        console.log('mentés sikeres', res);
      }).catch(error => {
        console.log('sikertelen mentés', error);
      })*/
  }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigateByUrl('/home');
  }
}
