import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dbConfigs } from '../../../Z/getDbconfigs'
@Injectable({
  providedIn: 'root'
})
export class DbConfigService {

  public selectedDatabaseUrl: string = ''; 
  dbConfigUrl: string = 'http://192.168.18.46:8080/api/internal/db-configs'

  constructor(private http: HttpClient) {}




  // the following Observable function is fetching database lists  
  getDatabases(): Observable<any> {
    // return dbConfigs.data.content
    return this.http.get(this.dbConfigUrl)
  }
  
  // to set and view the databases selected 
  setSelectedDatabase(selectedDb: string) {
    this.selectedDatabaseUrl = selectedDb;
  }
}
