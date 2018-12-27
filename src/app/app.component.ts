import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import{HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor (private http:HttpClient){

  }
}
