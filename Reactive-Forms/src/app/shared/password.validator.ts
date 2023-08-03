import { AbstractControl } from "@angular/forms";

 export function PasswordValidator(control: AbstractControl){
     const password = control.get('password');
     const confirmPassword = control.get('confirmPassword');
     return password && confirmPassword && password.value !== confirmPassword.value ?
     {'mismatch': true} :
     null;
}
// when password and confirmPassword... blank.... the two fields are not equal then...