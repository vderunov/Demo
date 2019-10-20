// import { Component, OnInit } from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import usersData from './helper.json';
// import { ApiService } from './../api.service';
import { IUsers } from './users.interface'
import{UserService} from './users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ 
    UserService ,
   ],
     encapsulation: ViewEncapsulation.None
  
})
export class UsersComponent implements OnInit {
  volonters;
  contacts;
  Users: any = usersData;
  
  constructor(
    private userService: UserService, 
) { }

  ngOnInit() {
     this.getContacts()
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      // this.volonters = data['articles'];
    });

  }

  getContacts(): void {
    console.log("Text");
    this.userService.getUsers().subscribe(contacts => 
    {
      this.contacts = contacts;
      console.log(this.contacts);
    }
    );
  }

}
