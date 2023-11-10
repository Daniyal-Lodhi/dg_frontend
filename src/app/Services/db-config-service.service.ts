import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbConfigServiceService {
  // dbMetaData:{}
  dbConfigUrl:string = 'http://193.168.90.136:8080/api/internal/db-metadata-values/'
  constructor(private http:HttpClient) { }


  getMetaData(value:string):Observable<any>{
    
    return this.http.get(this.dbConfigUrl+value);
  }
}
