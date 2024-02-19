import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { base_url } = environment
@Injectable({
  providedIn: 'root'
})
export class DbConfigService {

  refresh_db_url:string = `${base_url}/extract/`

  dbConfigUrl: string = `${base_url}/db-configs`

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
