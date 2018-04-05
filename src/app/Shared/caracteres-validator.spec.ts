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

describe('longueurMinimum Validator', () => {
    it('Une expression avec 1 espace et 2 caractères est invalide', () => {
        let control = { value: ' xx'};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
        });
    
    it('Une expression avec 2 espace et 1 caractère est invalide', () => {
        let control = { value: '  x'};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
        });

    it('Une phrase avec 3 espaces et 3 caractères est valide', () => {
        let control = { value: '   J’aime Angular'};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);
        });

    it('Une phrase avec 5 espaces, 5 caractères et 5 espaces est valide', () => {
        let control = { value: '     J’aime Angular     '};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);
        });
});