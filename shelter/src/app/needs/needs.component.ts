import { Component, OnInit } from '@angular/core';
import { Need } from './need';
import { Needs } from './mock-needs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss']
})
export class NeedsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title1 = 'List of needs';
  title2 = 'List of quests';

  needs = Needs;
}

// export class NeedsComponent implements OnInit {

//   need: Need;

//   constructor(private http: HttpClient){}

//   ngOnInit(){
//     this.http.get('needs.json').subscribe((data:Need) => this.need=data);
//   }
// }
