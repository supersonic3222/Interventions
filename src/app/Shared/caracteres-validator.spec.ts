import { VerifierCaracteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('Une chaîne vide est invalide', () => {
        let control = { value: ''};
        let validator = VerifierCaracteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
        });

    it('Une chaîne avec 10 espaces est invalide', () => {
        let control = { value: '          '};
        let validator = VerifierCaracteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
        });

    it('Une phrase avec des mots est valide', () => {
        let control = { value: 'Une phrase avec des mots'};
        let validator = VerifierCaracteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
        });

    it('Une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = { value: '   Une phrase test   '};
        let validator = VerifierCaracteresValidator.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
        });

});