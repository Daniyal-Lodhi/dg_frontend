import { Injectable } from '@angular/core';
import { columnData } from '../../../Z/ViewData'
import { businessDomainData } from '../../../Z/businessDomains'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { dbConfigs } from '../Components/dbconfigs/db-configs.component';
import { DbConfigService } from './dbConfig.service';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(private http:HttpClient,private selectedDb:DbConfigService) { }

  // fetching the meta data of selected db
  getMetaDataValues() {
    return columnData.data;
  }

// to map the the meta data (table/column) with business domain entities
mapBusinesDomainEntities(data):Observable<any>{
  return this.http.post(this.selectedDb.selectedDatabaseUrl,data)
}
 
}
