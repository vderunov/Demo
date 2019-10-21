import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

}
