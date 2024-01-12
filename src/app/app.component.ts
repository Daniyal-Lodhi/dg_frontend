import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'dg_frontend';
  location:any 
  
  route:any ;
  constructor(){
    // this.route = location.pathname
    this.location = location

  }  
}

