import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_email:String = '' ;
  user_password:String = ''




  constructor(private router:Router){}
  sign_in():any{
    if(this.user_email == 'admin' && this.user_password == 'admin'){
      console.log(this.user_email , this.user_password)
      localStorage.setItem("signedin_in",'true')
    this.router.navigate(['dbConfigs'])
    }
    else{
      alert("username or password is incorrect")
    }
  }






  getlength(val:any){
    return val.length
  }
}
