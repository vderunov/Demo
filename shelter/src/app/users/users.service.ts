import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService{

    constructor(private httpClient: HttpClient) { }
       
  

    public getUsers(){
        return this.httpClient.get('http://localhost:4200/assets/data.json');
      }
}