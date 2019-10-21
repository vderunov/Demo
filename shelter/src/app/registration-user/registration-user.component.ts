import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../shared/main.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;
  registerAs = ['manager'];
  isManager = false;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userPhone: [null, [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      userEmail: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(16)
      ]],
      isManager: [false],

      password: [null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      confirmPassword: [null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      shelterName: [null],
      shelterAddress: [null],
      shelterPhone: [null],
      shelterEmail: [null],
    }, {
        validator: ConfirmPasswordValidator.MatchPassword
      });
    this.setUserCategoryValidators();
  }

  setUserCategoryValidators() {
    const shelterName = this.registerForm.get('shelterName');
    const shelterAddress = this.registerForm.get('shelterAddress');
    const shelterPhone = this.registerForm.get('shelterPhone');
    const shelterEmail = this.registerForm.get('shelterEmail');

    this.registerForm.get('isManager').valueChanges
      .subscribe(isManager => {

        if (isManager === false) {
          shelterName.setValidators(null);
          shelterAddress.setValidators(null);
          shelterPhone.setValidators(null);
          shelterEmail.setValidators(null);
        }

        if (isManager === true) {
          shelterName.setValidators([Validators.required]);
          shelterAddress.setValidators([Validators.required]);
          shelterPhone.setValidators([
            Validators.required,
            Validators.pattern('^[0-9]+$')
          ]);
          shelterEmail.setValidators([
            Validators.required,
            Validators.email
          ]);
        }

        shelterName.updateValueAndValidity();
        shelterAddress.updateValueAndValidity();
        shelterPhone.updateValueAndValidity();
        shelterEmail.updateValueAndValidity();
      });
  }

  // For easier access to the form fields
  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      // stop here if form is invalid
      return;
    }
    const user = {
      firstName: this.form.lastName.value,
      lastName: this.form.lastName.value,
      password: this.form.password.value,
      userEmail: this.form.userEmail.value,
      phone: this.form.userPhone.value,
      isManager: this.isManager,
      shelterName: this.form.shelterName.value,
      shelterAddress: this.form.shelterAddress.value,
      shelterPhone: this.form.shelterPhone.value,
      shelterEmail: this.form.shelterEmail.value
    };

    this.mainService.register(user);
  }

  onCheckChange() {
    this.isManager = !this.isManager;
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
