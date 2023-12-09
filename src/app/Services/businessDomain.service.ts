import { Injectable } from '@angular/core';
import { businessDomainData } from '../../../Z/businessDomains'

@Injectable({
  providedIn: 'root'
})


export class businessDomainService {
 constructor(){}



 getBusinessDomainData(){
  return businessDomainData
 }
}
