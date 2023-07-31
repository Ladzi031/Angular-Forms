import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public registrationForm :FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.registrationForm =  this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: [""],
      confirmPassword: [""],
      address: this.formBuilder.group({
        city: [""],
        state: [""],
        postalCode: [""]
      })
    });
  }

  public loadApiData(){
    this.registrationForm.patchValue({
      userName: "James031",
      address:{
        city: "city",
        state: "state"
      }      
    });
  }   
}

// for the built-in validation, you need: Validators

  /*
// this FormGroup should be a instance of the OVERALL form in the view/app.component.html
  // formControl is an instance of the fields within the form...
  registrationForm = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    address: new FormGroup({
      city: new FormControl(""),
      state: new FormControl(""),
      postalCode: new FormControl("")
    })
  });

  public loadApiData() {
    
  
     the setValue Method, here receives an object that matches the structure of the this.formGroup, and controlNames as keys (should be the same!)
    this.registrationForm.setValue({
      userName: "Ladzi031",
      password: "password1",
      confirmPassword: "password1",
      address: {
        city: "some Random city",
        state: "some random State",
        postalCode: "123456"
      }
    });

    
    //however patchValue is less strict... it accepts a partial object
    this.registrationForm.patchValue({
      userName: "James031",
      address:{
        city: "city",
        state: "state"
      }
    });

  }

   */ 
