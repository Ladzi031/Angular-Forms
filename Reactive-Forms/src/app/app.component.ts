import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { forbiddenNameValidotor } from './shared/userName.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

public registrationForm :FormGroup;


get alternateEmails() {
  return this.registrationForm.get('alternateEmails') as FormArray;
}

addAlternateEmail(){
  this.alternateEmails.push(this.formBuilder.control("")); // add a new formcontrol...
  console.log("this function is being called");
}


  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {
    this.registrationForm = this.formBuilder.group({});
  }

  ngOnInit(): void {


    this.registrationForm =  this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidotor(/password/)]], // we can then specify a pattern as a parameter to test against the userName
      password: [""],
      confirmPassword: [""],
      email: [''],
      subscribe: [false],
      address: this.formBuilder.group({
        city: [""],
        state: [""],
        postalCode: [""]
      }),
      alternateEmails: this.formBuilder.array([])
    },{validator: PasswordValidator});

    //get a hold of the subscribe FormControl filed....
    // apply conditional validation based on the subscribe FormControl field...
    this.registrationForm.get('subscribe')?.valueChanges.subscribe( (checkedValue) => {
      const email = this.registrationForm.get('email');

      // console.log("the value has changed!", checkedValue);

      if(checkedValue){

        email?.setValidators(Validators.required);
      
      }else {
        email?.clearValidators();
      }

      email?.updateValueAndValidity();

    } )
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
  
  onSubmit() {
    //console.log(this.registrationForm.value);
    
    this.registrationService.register(this.registrationForm.value).subscribe( 
      (response) => console.log(response),

    )
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
