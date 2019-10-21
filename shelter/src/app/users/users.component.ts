
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { IUsers } from './users.interface';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService],
  encapsulation: ViewEncapsulation.None

})
export class UsersComponent implements OnInit {
  Users: IUsers[] = [];

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.service.getUsers()
      .subscribe(data => {
        for (const d of (data as IUsers[])) {
          this.Users.push({
            name: d.name,
            id: d.id,
            surname: d.surname,
            phone: d.phone,
            email: d.email,
            photo: d.photo,
            adress: d.adress,
            country: d.country,
            region: d.region,
            city: d.city,
          });
        }
        console.log(this.Users, 'smart');
      });
  }


}








  // Get full response

  // getIUserss() {
  //   this.api.getIUsers()
  //   .subscribe(resp => {
  //     console.log(resp);
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map((key: any) =>
  //       `${key}: ${resp.headers.get(key)}`);

  //     for (const data of resp.body) {
  //       this.IUsers.push(data);
  //     }
  //     console.log(this.IUsers);
  //   });
  // }

  // Get specific fields response

  // getIUserss() {
  //   this.api.getIUsers()
  //     .subscribe(data => {
  //       console.log(data);
  //       for (const d of (data as any)) {
  //         this.IUsers.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       console.log(this.IUsers);
  //     });
  // }



  // getIUsersById(id: any) {
  //   this.api.getIUsersById(id)
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }



// }
