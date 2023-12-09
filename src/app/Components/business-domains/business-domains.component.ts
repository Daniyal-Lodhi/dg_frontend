import { Component , OnInit } from '@angular/core';
import { businessDomainService } from 'src/app/Services/businessDomain.service';
@Component({
  selector: 'app-business-domains',
  templateUrl: './business-domains.component.html',
  styleUrls: ['./business-domains.component.css']
})
export class BusinessDomainsComponent implements OnInit {
  // original business domain data array for business domains, also serves as tree data 
  businessDomainData:any ;
  // data to show on side screen
  Data:any ;
  parentNode:boolean
  Object: any
  Modal:boolean
  entityName:string
  entityDescription:string



  constructor(private dataSource:businessDomainService){
    // calling fucntion
    this.getBusinessDomainData() ;

    this.Data = this.businessDomainData[0]
  }

  // function to get business domain data from dataservice
  getBusinessDomainData(){
    this.businessDomainData =  this.dataSource.getBusinessDomainData() ;
  }

  Date(dateString:string){
    return new Date(dateString).toLocaleString()
  }
  // funcion to display the business domain data based on display and parent Id coming from side nav
  displayData(displayData:any){
    // console.log("display id is ",displayData.displayId,"parent id is ",displayData.parentId)
    // to display expandable node
    if(displayData.displayId && displayData.parentId == undefined ){
      this.parentNode = true ;

      for(let i =0 ; i < this.businessDomainData.length ; i++){

        if(this.businessDomainData[i].id==displayData.displayId){
          this.Data = this.businessDomainData[i]
          console.log(this.Data)
        }
      }
    }
    // to display leaf node
    else {
      this.parentNode = false ;
      for(let pNode = 0 ; pNode < this.businessDomainData.length ; pNode++){

        if(this.businessDomainData[pNode].id==displayData.parentId){

          for(var j = 0 ; j < this.businessDomainData[pNode].businessDomainEntitiesDtoList.length ; j++){

            if( this.businessDomainData[pNode].businessDomainEntitiesDtoList[j].id==displayData.displayId){
              this.Data = this.businessDomainData[pNode].businessDomainEntitiesDtoList[j] ;
              console.log(this.Data)
              break ; 
          }
        }
        break ;
        }
      }
    }
   
  }
  // to show Modal for adding business domain entity list
  toggleModal(){
    this.Modal?this.Modal = false : this.Modal = true ;
  }
  // handle add entity submit
  handleSubmit(){
    console.log(this.entityName,this.entityDescription)
  }
  ngOnInit(): void {
    this.parentNode = true ;
    this.Data = this.businessDomainData[0]
    console.log("data is ", this.Data)
    this.Object = Object
    this.Modal = false ;
  }
}
