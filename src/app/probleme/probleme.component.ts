import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VerifierCaracteresValidator } from '../Shared/caracteres-validator';
import { TypeproblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';

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
        telephone: [{value: '', disabled: true}],
        notifier:['PasNotifier'],
        notificationCourrielGroupe: this.fb.group({
          Courriel: [{value: '', disabled: true}],
          CourrielValidation: [{value: '', disabled: true}]
        })
    });

    this.types.obtenirTypes()
    .subscribe(typ => this.typesProblemes = typ,
               error => this.errorMessage = <any> error);

    this.problemeForm.get('notifier').valueChanges
    .subscribe(value => this.appliquerNotifications(value));
  }

  appliquerNotifications(typeNotification: string): void{
    const CourrielControl = this.problemeForm.get('notificationCourrielGroupe.Courriel');
    const telephoneControl = this.problemeForm.get('telephone');
    const CourrielValidationControl = this.problemeForm.get('notificationCourrielGroupe.CourrielValidation');
    const CourrielGroupControl = this.problemeForm.get('notificationCourrielGroupe');

    CourrielControl.clearValidators();
    CourrielValidationControl.clearValidators();
    telephoneControl.clearValidators();
    
    CourrielControl.reset();
    CourrielValidationControl.reset();
    telephoneControl.reset();

    CourrielControl.disable();
    telephoneControl.disable();
    CourrielValidationControl.disable();
    
    if(typeNotification === 'MeNotifierCourriel'){
      CourrielControl.enable();
      CourrielControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      CourrielValidationControl.enable();
      CourrielValidationControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      CourrielGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielConfirmation()])]);
    } else if(typeNotification === 'MeNotifierMessagerie'){
      telephoneControl.enable();
      telephoneControl.setValidators([Validators.required,Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]);
    }
    
    CourrielControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
    CourrielValidationControl.updateValueAndValidity();
    CourrielGroupControl.updateValueAndValidity();
  }
}


