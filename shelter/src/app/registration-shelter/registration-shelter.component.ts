import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Shelter } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './registration-shelter.component.html',
  styleUrls: ['./registration-shelter.component.scss']
})
export class RegistrationShelterComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      kids: new FormControl('', Validators.required),
      info: new FormControl('')
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    } else {
      // form data
      const formData = { ...this.form.value };
      this.form.reset();
    }

    // to work with the server in the future
    const shelter: Shelter = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      kids: this.form.value.kids,
      info: this.form.value.info
    };
  }

  gotoMainPage() {
    this.router.navigate(['/']);
  }
}
