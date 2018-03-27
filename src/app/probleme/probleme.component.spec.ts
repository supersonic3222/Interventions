import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AngularFontAwesomeModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });

  it('zone PRENOM invalide avec 2 caractères', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a'.repeat(2));
  errors = zone.errors || {};
  expect(errors['minlength']).toBeTruthy();
  });

  it('zone PRENOM valide avec 3 caractères', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a'.repeat(3));
  errors = zone.errors || {};
  expect(errors['minlength']).toBeFalsy();
  });

  it('zone PRENOM valide avec 200 caractères', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a'.repeat(200));
  errors = zone.errors || {};
  expect(errors['minlength']).toBeFalsy();
  });

  it('zone PRENOM invalide avec aucune valeur', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('');
  errors = zone.errors || {};
  expect(errors['required']).toBeTruthy();
  });

  it('zone PRENOM invalide avec 1 caractère', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('a');
  errors = zone.errors || {};
  expect(errors['minlength']).toBeTruthy();
  });

  it('zone PRENOM valide avec 50 espaces', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue(' '.repeat(50));
  errors = zone.errors || {};
  expect(errors['minlength']).toBeFalsy();
  });

  it('zone PRENOM valide avec 2 espaces et 1 caractère', () => {
  let errors = {};
  let zone = component.problemeForm.controls['prenom'];
  zone.setValue('  a');
  errors = zone.errors || {};
  expect(errors['minlength']).toBeFalsy();
  });
});
