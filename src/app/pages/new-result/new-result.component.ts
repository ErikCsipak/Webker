import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Observation } from 'src/app/models/observation';
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
    if(this.form.valid){
      var obs: Observation = {
        'subject': this.authService.getCurrentUser(),
        'id': this.makeid(10),
        'resourceType': 'Observation',
        'status': 'preliminary',
        'code': {
          'text': 'Blood map'
        },
        'basedOn':[
          '4.00-11.00',
          '3.50-5.00',
          '120-165',
          '37.0-47.0',
          '80.0-100.0',
          '27.0-34.0',
          '320-360',
          '150-450',
          '35.0-56.0',
          '11.0-16.0',
          '15.0-17.0',
          '6.5-12.0',
          '0.11-0.28',
          '2.00-7.00',
          '0.80-4.00',
          '0.12-1.20',
          '0.00-0.50',
          '0.00-0.01',
          '0.00-7.00'
        ],
        'component': [
          {
            'code': 'WBC',
            'valueString': this.form.value.WBC
          },
          {
            'code': 'RBC',
            'valueString': this.form.value.RBC
          },
          {
            'code': 'HGB',
            'valueString': this.form.value.HGB
          },
          {
            'code': 'HCT',
            'valueString': this.form.value.HCT
          },
          {
            'code': 'MCV',
            'valueString': this.form.value.MCV
          },
          {
            'code': 'MCH',
            'valueString': this.form.value.MCH
          },
          {
            'code': 'MCHC',
            'valueString': this.form.value.MCHC
          },
          {
            'code': 'PLT',
            'valueString': this.form.value.PLT
          },
          {
            'code': 'RDWSD',
            'valueString': this.form.value.RDWSD
          },
          {
            'code': 'RDWCV',
            'valueString': this.form.value.RDWCV
          },
          {
            'code': 'PDW',
            'valueString': this.form.value.PDW
          },
          {
            'code': 'MPV',
            'valueString': this.form.value.MPV
          },
          {
            'code': 'PCT',
            'valueString': this.form.value.PCT
          },
          {
            'code': 'NEUT',
            'valueString': this.form.value.NEUT
          },
          {
            'code': 'LYMPH',
            'valueString': this.form.value.LYMPH
          },
          {
            'code': 'MONO',
            'valueString': this.form.value.MONO
          },
          {
            'code': 'EO',
            'valueString': this.form.value.EO
          },
          {
            'code': 'BASO',
            'valueString': this.form.value.BASO
          },
          {
            'code': 'IG',
            'valueString': this.form.value.IG
          }
        ],
        'effectiveInstant': this.form.value.DATE
      };

      this.afs.collection('Observations').add(obs).then(res => {
        console.log('mentés sikeres', res);
      }).catch(error => {
        console.log('sikertelen mentés', error);
      }) 
    }
    
  }

  makeid(length: number): string {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigateByUrl('/home');
  }
}
