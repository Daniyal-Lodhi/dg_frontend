import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class businessDomainService { 
  businessDomainURL = "http://127.0.0.1:8080/api/internal/business-domains"
  businessDomainEntityURL = "http://127.0.0.1:8080/api/internal/business-domain-entity/"
 constructor(private http:HttpClient){}


// get business domain data 
 getBusinessDomainData():Observable<any>{
  return this.http.get(this.businessDomainURL)
 }
// to add business domain
 addbusinessDomain(domainBody:any):Observable<any>{
  return this.http.post(this.businessDomainURL,domainBody)
 }
 
//  add business domain entity 
 addbusinessDomainEntity(businessdomainId:any ,entityBody:any):Observable<any>{
  return this.http.post(this.businessDomainEntityURL.concat(businessdomainId),entityBody)
 }

// delete business domain entity
deleteBusinessDomainEntity(id:any):Observable<any>{
  return this.http.delete(this.businessDomainEntityURL.concat(id),{
    headers:{

    }
  })
}
}
