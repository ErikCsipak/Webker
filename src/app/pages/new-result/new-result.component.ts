import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observation } from 'src/app/models/observation';
import { AuthService } from 'src/app/services/auth.service';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.scss']
})
export class NewResultComponent implements OnInit {

  form: FormGroup = new FormGroup({
    WBC: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    RBC: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    HGB: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    HCT: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MCV: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MCH: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MCHC: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    PLT: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    RDWSD: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    RDWCV: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    PDW: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MPV: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    PCT: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    NEUT: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    LYMPH: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    MONO: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    EO: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    BASO: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    IG: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    DATE: new FormControl('', Validators.required)
  });

  constructor(private oService: ObservationService<Observation>, private router: Router, private authService: AuthService, private afs: AngularFirestore) { }
  
  
  alertMessage = '';
  alertsList: any = {
    invalid: () => 'Nem töltöttél ki minden mezőt, vagy túl nagy értéket adtál meg! Ne felejtsd el, hogy az értékek csak számok lehetnek!',
    unsuccessful: () => 'Sikertelen mentés!',
    onlyNum: () => 'A mezőkbe csak számokat írhatsz, és maximum 6 karakter hosszúak lehetnek!'
  }

  saveData(){
    if(this.form.valid){
      let isInvalid = false;
      for(const field in this.form.controls){
        //console.log(field)
        if(this.form.get(field) !== this.form.get('DATE') && (String(this.form.get(field)?.value).length > 6 || parseFloat(String(this.form.get(field)?.value)) === NaN)){
          //console.log(this.form.get(field)?.value)
          isInvalid=true;
        }
      }

      if (isInvalid) {
        this.alertMessage=this.alertsList.onlyNum();
      } else {
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

        this.oService.weakAdd(obs).then(res => {
          this.router.navigateByUrl("/home");
          alert("Sikeres mentés! :)");
        }).catch(error => {
          //console.log('sikertelen mentés', error);
          this.alertMessage=this.alertsList.unsuccessful();
        }) 
      }
    } else {
      this.alertMessage=this.alertsList.invalid();
    }
    
  }

  makeid(length: number): string {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
  }

  ngOnInit(): void {}

  back(): void {
    this.router.navigateByUrl('/home');
  }
}
