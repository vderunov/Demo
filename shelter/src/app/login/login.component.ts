import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error: string;

  constructor(private mainService: MainService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
    });
  }

  // For easier access to the form fields
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      // stop here if form is invalid
      return;
    }
    const user = {
      email: this.form.email.value,
      password: this.form.password.value
    };

    this.mainService.register(user);
  }

  goToRegistrationPage() {
    this.router.navigate(['/registraction-user']);
  }

}
