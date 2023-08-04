// exercise1.component.ts

import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-exercise1',

  templateUrl: './exercise1.component.html',

  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component implements OnInit {
  regForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, passwordValidator()]],
    });
  }

  get name(): FormControl {
    return this.regForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.regForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.regForm.get('password') as FormControl;
  }

  userRegistration() {
    if (this.regForm.valid) {
      console.log('Successfull Registration!');
    }
  }
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === password[i + 1]) {
        return { consecutiveChars: true };
      }

      // Check for minimum length
      if (password.length < 4) {
        return { minLength: true };
      }

      // Check for maximum length
      if (password.length > 10) {
        return { maxLength: true };
      }

      // Check for at least one special character using regex
      if (!/[!@#$%^&*]/.test(password)) {
        return { specialChar: true };
      }

      // Check for consecutive characters
    }
    return null; // Return null if the password is valid
  };
}
