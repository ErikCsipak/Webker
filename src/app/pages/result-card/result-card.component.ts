import { Component, Input, OnInit } from '@angular/core';
import { Observation } from 'src/app/models/observation';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() obs?: Observation;
  form: FormGroup = new FormGroup({
    uWBC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uRBC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uHGB: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uHCT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uMCV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uMCH: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uMCHC: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uPLT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uRDWSD: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uRDWCV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uPDW: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uMPV: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uPCT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uNEUT: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uLYMPH: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uMONO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uEO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uBASO: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uIG: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    uDATE: new FormControl()
  });

  constructor(private oService: ObservationService<Observation> ,private router: Router, private authService: AuthService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    let i = 0;
    for (const field in this.form.controls) {
      if(i<19){
        this.form.get(field)?.setValue(this.obs?.component[i].valueString);
      }
       i = i + 1;
    }
    if(this.obs?.effectiveInstant){
      console.log(this.obs.effectiveInstant)
      this.form.get("uDATE")?.setValue(this.obs.effectiveInstant)
    }
  }

  parseNum(data: string | undefined): number{
    if(data){
      return parseFloat(data)
    } else {
      return 0
    }
    
  }

  public onDeleteClicked(doc: any): void {
    this.oService.delete('Observations', doc).then(res => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/home"]));
      alert("Sikeres törlés :)")
    }).catch(error => {
      alert("Sikertelen törlés! :(")
    })
  }

  updateData(): void {
    if (this.obs) {
      var o: Observation = {
        'id': this.obs.id,
        'resourceType': this.obs.resourceType,
        'status': 'amended',
        'code': {
          'text': this.obs.code.text
        },
        'component': [
          {
            'code': 'WBC',
            'valueString': this.form.value.uWBC
          },
          {
            'code': 'RBC',
            'valueString': this.form.value.uRBC
          },
          {
            'code': 'HGB',
            'valueString': this.form.value.uHGB
          },
          {
            'code': 'HCT',
            'valueString': this.form.value.uHCT
          },
          {
            'code': 'MCV',
            'valueString': this.form.value.uMCV
          },
          {
            'code': 'MCH',
            'valueString': this.form.value.uMCH
          },
          {
            'code': 'MCHC',
            'valueString': this.form.value.uMCHC
          },
          {
            'code': 'PLT',
            'valueString': this.form.value.uPLT
          },
          {
            'code': 'RDWSD',
            'valueString': this.form.value.uRDWSD
          },
          {
            'code': 'RDWCV',
            'valueString': this.form.value.uRDWCV
          },
          {
            'code': 'PDW',
            'valueString': this.form.value.uPDW
          },
          {
            'code': 'MPV',
            'valueString': this.form.value.uMPV
          },
          {
            'code': 'PCT',
            'valueString': this.form.value.uPCT
          },
          {
            'code': 'NEUT',
            'valueString': this.form.value.uNEUT
          },
          {
            'code': 'LYMPH',
            'valueString': this.form.value.uLYMPH
          },
          {
            'code': 'MONO',
            'valueString': this.form.value.uMONO
          },
          {
            'code': 'EO',
            'valueString': this.form.value.uEO
          },
          {
            'code': 'BASO',
            'valueString': this.form.value.uBASO
          },
          {
            'code': 'IG',
            'valueString': this.form.value.uIG
          }
        ],
        'effectiveInstant': this.form.value.uDATE
      };
      if (this.obs.firestoreId) {
        this.oService.update('Observations', this.obs.firestoreId, o).then(res => {
          alert("Sikeres módosítás!")
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/home"]));
        },
        error => {
          alert("Sikertelen módosítás!")
        })
      } else {
        alert("Sikertelen módosítás!")
      }
      
    }
    
    
  }

}
