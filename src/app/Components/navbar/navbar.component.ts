import { Component } from '@angular/core';
import { DataService } from 'src/app/services/metaData.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dbId:string ;
  constructor(private metadatasource: DataService){
    this.dbId = metadatasource.getSelectedDbId()
    // console.log(this.dbId)
    // console.log(location.pathname)
  }
  location:any = location

  // making navbar smooth 
  // navbarToggle(){
  // let navlist = document.getElementsByClassName('navlist')
  // navlist.style.height === "0px" ? navlist.style.height = 'auto' : navlist.style.height = "0px" ;
  // console.log(navlist) ; 
  // }
}
