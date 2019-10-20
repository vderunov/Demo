import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
data = []
  constructor(private httpClient: HttpClient) { }
  public getUser(){
this.data.push(this.httpClient.get('./users/helper.json'))
console.log(this.data);
    return this.httpClient.get('./users/helper.json');
  }
}
