import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public searchText : string;
  public customerData : any;

  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'Anil kumar', "Age": 34, "blog" :'https://code-view.com'},
      {"name": 'Sunil Kumar Singh', "Age": 28, "blog" :'https://code-sample.xyz'},
      {"name": 'Sushil Singh', "Age": 24, "blog" :'https://code-sample.com'},
      {"name": 'Aradhya Singh', "Age": 5, "blog" :'https://code-sample.com'},
      {"name": 'Reena Singh', "Age": 28, "blog" :'https://code-sample.com'},
      {"name": 'Alok Singh', "Age": 35, "blog" :'https://code-sample.com'},
      {"name": 'Dilip Singh', "Age": 34, "blog" :'https://code-sample.com'}];
  }
}
