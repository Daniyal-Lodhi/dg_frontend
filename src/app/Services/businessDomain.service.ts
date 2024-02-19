import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { base_url } = environment

@Injectable({
  providedIn: 'root'
})
export class businessDomainService {
  businessDomainURL = `${base_url}/business-domains`
  businessDomainEntityURL = `${base_url}/business-domain-entity/`
  constructor(private http: HttpClient) { }


  // get business domain data 
  getBusinessDomainData(): Observable<any> {
    return this.http.get(this.businessDomainURL)
  }
  // to add business domain
  addbusinessDomain(domainBody: any): Observable<any> {
    return this.http.post(this.businessDomainURL, domainBody)
  }

  //  add business domain entity 
  addbusinessDomainEntity(businessdomainId: any, entityBody: any): Observable<any> {
    return this.http.post(this.businessDomainEntityURL.concat(businessdomainId), entityBody)
  }

  // delete business domain entity
  deleteBusinessDomainEntity(id: any): Observable<any> {
    return this.http.delete(this.businessDomainEntityURL.concat(id), {
      headers: {

      }
    })
  }
}
