import { ValidatorFn, AbstractControl } from "@angular/forms";

export class emailMatcherValidator {
    static courrielConfirmation() : ValidatorFn{
        return (c: AbstractControl): { [key: string]: boolean} | null => {
        let email = c.get('Courriel');
        let emailValidation = c.get('CourrielValidation');

        if(!email.value || !emailValidation.value){
            return null;
        }

        if(email.value === emailValidation.value){
            return null;
        }
        return {'Match': true};
        };
    }

}