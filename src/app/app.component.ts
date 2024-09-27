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
  signedin_in : boolean = true
  route:any ;
 
  constructor(private router:Router){
    // this.route = location.pathname
    this.location = location
    this.checkAuth()
  }  
  checkAuth(){
    // if(localStorage.getItem('signedin_in') === 'true'){
    //   console.log("signed in")
    //   // this.router.navigate(['dbConfigs'])

    // }
    // else{
    //   console.log("not signed in")
    //   this.router.navigate(['login'])
    // }
  }
}

