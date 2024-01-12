import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DbConfigService } from './dbConfig.service';
@Injectable({
  providedIn: 'root'
})


export class DataService {
  // private selectedDbId:string ;
  private metaDataUrl: string = ""
  private columnRelatedTermsURL:string = "http://127.0.0.1:8080/api/internal/column-related-terms/"

  constructor(private http: HttpClient, private selectedDb: DbConfigService) { }








  // setting the selected db id
  setSelectedDbId(id: string) {
    // this.selectedDbId = id 
    this.metaDataUrl = "http://127.0.0.1:8080/api/internal/db-metadata-values/".concat(id)
  }

  getSelectedDbId() {
    return this.metaDataUrl;
  }

  // fetching the meta data of selected db
  getMetaDataValues(): Observable<any> {
    // return this.http.get("http://127.0.0.1:3001/api/metadata/1")
    return this.http.get(this.metaDataUrl)
  }

  // to map the the meta data (table/column) with business domain entities
  mapEntitiesWithTable(tableId:any,entitiesIdList:any[]): Observable<any> {
    return this.http.post(`http://127.0.0.1:8080/api/internal/${tableId}/catalog-mapping-table`, entitiesIdList)
  }

  // to map the the meta data (table/column) with business domain entities
  mapEntitiesWithColumn(columnId:any,entitiesIdList:any[]): Observable<any> {
    return this.http.post(`http://127.0.0.1:8080/api/internal/${columnId}/catalog-mapping-column`, entitiesIdList,{
      headers:{
        "Content-Type":"application/json"
      }
    })
  }

  // to get related terms for column 
  getColumnRelatedTerms(columnId:any): Observable<any>{
    return this.http.get(this.columnRelatedTermsURL.concat(columnId))
  }

  // get input values
  getColumnInputValues(id:any): Observable<any>{
    return this.http.get(`http://127.0.0.1:8080/api/internal/db-metadata-column/${id}/values`)
  }  
  
  // post input values
  postColumnInputValues(id:any,body:any): Observable<any>{
    return this.http.post(`http://127.0.0.1:8080/api/internal/db-metadata-column/${id}/values`,body)
  }

  // get column aliases
  getColumnAliases(id:any): Observable<any>{
    return this.http.get(`http://127.0.0.1:8080/api/internal/db-metadata-column/${id}/alias`)
  } 
  // post input values
  postColumnAliases(id:any,body:any): Observable<any>{
    return this.http.post(`http://127.0.0.1:8080/api/internal/db-metadata-column/${id}/alias`,body)
  }

  deleteTableMapping(tableId:any,entId:any): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8080/api/internal/delete/${tableId}/catalog-mapping-table`,{body:entId})
  }

  deleteColMapping(columnId:any,entId:any): Observable<any>{
    return this.http.delete(`http://127.0.0.1:8080/api/internal/delete/${columnId}/catalog-mapping-column`,{body:entId})
  }

  

  





}
