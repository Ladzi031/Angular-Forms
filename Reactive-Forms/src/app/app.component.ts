import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // this FormGroup should be a instance of the OVERALL form in the view/app.component.html
  // formControl is an instance of the fields within the form...
  // it can take default values, too...
  registrationForm = new FormGroup({
    userName: new FormControl("Ladzi031"),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    address: new FormGroup({
      city: new FormControl(""),
      state: new FormControl(""),
      postCode: new FormControl("")
    })
  });
  
    
}
