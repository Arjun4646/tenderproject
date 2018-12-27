import { Component, OnInit } from '@angular/core';
import {employees} from '../../datamodel/employess.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 empolyess : employees[] =[];
firstname :string;
  constructor() { }

  ngOnInit() {
this.empolyess =[
  {
  "ID" :3,
  "userId": "ABC",
  "jobTitleName":"FF",
  "firstName":"DD",
  "lastName":"AA",
  },
  {
    "ID" :1,
    "userId": "ABC",
    "jobTitleName":"FF",
    "firstName":"DAD",
    "lastName":"AA",
    },
  {
    "ID" :2,
    "userId": "ABC",
    "jobTitleName":"FF",
    "firstName":"Ss",
    "lastName":"sA",
    }
];
  }

Search(){
  this.empolyess =this.empolyess.filter(res=>{
    return res.firstName.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase() );
  });
}
}
