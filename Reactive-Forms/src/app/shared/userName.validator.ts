import { AbstractControl } from "@angular/forms";

 export function forbiddenNameValidotor(control : AbstractControl)  {

    // a regex Test...
    const forbidden :boolean = /admin/.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
}