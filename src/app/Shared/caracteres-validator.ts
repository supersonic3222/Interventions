import { ValidatorFn } from "@angular/forms";

export class VerifierCaracteresValidator {
    static sansEspaces(): ValidatorFn {
        return (): { [key: string]: boolean } | null => {
            return { 'sansEspaces': true };
        };
    }
}