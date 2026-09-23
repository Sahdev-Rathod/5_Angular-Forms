import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MDFComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          this.nameValidator()
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });
  }

  // Custom Validator
  nameValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (!value) {
        return null;
      }

      const validName = /^[a-zA-Z ]+$/.test(value);

      return validName
        ? null
        : { invalidName: true };
    };
  }

  onSubmit() {
    if (this.userForm.valid) {

      console.log(this.userForm.value);

      alert('Form Submitted Successfully');

    } else {

      this.userForm.markAllAsTouched();

    }
  }


}
