import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VerifierCaracteresValidator } from '../Shared/caracteres-validator';
import { TypeproblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProblemes: ITypeProbleme[];
  errorMessage: string;
  constructor(private fb:FormBuilder, private types: TypeproblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
        prenom: ['',[VerifierCaracteresValidator.sansEspaces(), VerifierCaracteresValidator.longueurMinimum(3)]],
        nom: ['',[VerifierCaracteresValidator.sansEspaces(), VerifierCaracteresValidator.longueurMinimum(3)]],
        noType: ['', Validators.required],
        Notification:['appliquerNotification'],
        telephone: [{value: '', disabled: true}],
        notificationCourrielGroupe: this.fb.group({
        Courriel: [{value: '', disabled: true}],
        CourrielValidation: [{value: '', disabled: true}]

        })
    });

    this.types.obtenirTypes()
    .subscribe(typ => this.typesProblemes = typ,
               error => this.errorMessage = <any> error);
  }

  appliquerNotifications(typeNotification: string): void{
    const CourrielControl = this.problemeForm.get('notificationCourrielGroupe.Courriel');
    const telephoneControl = this.problemeForm.get('telephone');
    const CourrielValidationControl = this.problemeForm.get('notificationCourrielGroupe.CourrielValidation');
   
    CourrielControl.clearValidators();
    CourrielValidationControl.clearValidators();
    telephoneControl.clearValidators();
    
    CourrielControl.reset();
    CourrielValidationControl.reset();
    telephoneControl.reset();

    CourrielControl.disable();
    telephoneControl.disable();
    CourrielValidationControl.disable();
    
    if(typeNotification === 'MeNotifier'){
      CourrielControl.enable();
      CourrielControl.setValidators([Validators.required]);
      telephoneControl.enable();
      telephoneControl.setValidators([Validators.required]);
      CourrielValidationControl.enable();
      CourrielValidationControl.setValidators([Validators.required]);
    }
    CourrielControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
    CourrielValidationControl.updateValueAndValidity();
  }
}


