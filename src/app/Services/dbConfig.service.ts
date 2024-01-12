import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbConfigService {

  refresh_db_url:string = "http://127.0.0.1:8080/api/internal/extract/"

  dbConfigUrl: string = 'http://127.0.0.1:8080/api/internal/db-configs'

  constructor(private http: HttpClient) {}




  // the following Observable function is fetching database lists  
  getDatabases(): Observable<any> {
    // return dbConfigs.data.content
    return this.http.get(this.dbConfigUrl)
  }

  refreshDatabase(dbId:string):Observable<any>{
    return this.http.post(this.refresh_db_url+dbId,{})
  }
  
}
