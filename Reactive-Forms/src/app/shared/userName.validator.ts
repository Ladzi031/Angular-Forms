import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidotor(forbiddenName: RegExp): ValidatorFn {

    return (control : AbstractControl) => {
        // a regex Test...
        const forbidden :boolean = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName': { value: control.value }} : null;
    }   
}