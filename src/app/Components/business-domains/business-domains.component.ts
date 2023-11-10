import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-business-domains',
  templateUrl: './business-domains.component.html',
  styleUrls: ['./business-domains.component.css']
})
export class BusinessDomainsComponent {
bData:any ;
render:any ;


constructor(private datasource:DataService , private router:ActivatedRoute){
  this.bData = datasource.getData().businessDomains ;
  // console.log(this.bData)
  this.router.queryParams.subscribe((data:any)=>{
    this.render = data.show
    // console.log(data.show)
  })

  

}
}
