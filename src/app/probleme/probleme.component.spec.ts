import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TypeproblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,AngularFontAwesomeModule, HttpClientModule],
      declarations: [ ProblemeComponent ],
      providers: [ TypeproblemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('zone PRENOM invalide avec 2 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });
  
    it('zone PRENOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
    });
  
    it('zone PRENOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
    });
  
    it('zone PRENOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });
  
    it('zone PRENOM invalide avec 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });
  
    it('zone PRENOM invalide avec 50 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(50));
    errors = zone.errors || {};
    expect(errors['sansEspaces']).toBeFalsy();
    });
  
    it('zone PRENOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('  a');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

    it('Zone TELEPHONE est désactivé si non sélectionner', ()=>{
      component.appliquerNotifications('Non');

      let zone = component.problemeForm.get('telephone');
      expect(zone.status).toEqual('DISABLED');
    });

    it('Zone TELEPHONE est vide quand ne pas me notifier', () =>{
      component.appliquerNotifications('Non');
      let zone = component.problemeForm.get('telephone');
      expect(zone.value).toBeNull();
    });

    it('Zone ADRESSE COURRIEL est désactivé si non sélectionner', ()=>{
      component.appliquerNotifications('Non');

      let zone = component.problemeForm.get('notificationCourrielGroupe.CourrielValidation');
      expect(zone.status).toEqual('DISABLED');
    });

    it('Zone ADRESSE COURRIEL est vide quand ne pas me notifier', () =>{
      component.appliquerNotifications('Non');
      let zone = component.problemeForm.get('notificationCourrielGroupe.Courriel');
      expect(zone.value).toBeNull();
    });

    it('Zone CONFIRMER COURRIEL est désactivé si non sélectionner', ()=>{
      component.appliquerNotifications('Non');

      let zone = component.problemeForm.get('notificationCourrielGroupe.CourrielValidation');
      expect(zone.status).toEqual('DISABLED');
    });

    it('Zone CONFIRMER COURRIEL est vide quand ne pas me notifier', () =>{
      component.appliquerNotifications('Non');
      let zone = component.problemeForm.get('notificationCourrielGroupe.CourrielValidation');
      expect(zone.value).toBeNull();
    });

});