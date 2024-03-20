import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DbConfigService } from './dbConfig.service';
import { environment } from 'src/environments/environment';

const { base_url } = environment 
@Injectable({
  providedIn: 'root'
})


export class DataService {
  // private selectedDbId:string ;
  private metaDataUrl: string = ""
  private columnRelatedTermsURL:string = `${base_url}/column-related-terms/`

  constructor(private http: HttpClient, private selectedDb: DbConfigService) { }








  // setting the selected db id
  setSelectedDbId(id: string) {
    // this.selectedDbId = id 
    this.metaDataUrl = `${base_url}/db-metadata-values/`.concat(id)
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
    return this.http.post(`${base_url}/${tableId}/catalog-mapping-table`, entitiesIdList)
  }

  // to map the the meta data (table/column) with business domain entities
  mapEntitiesWithColumn(columnId:any,entitiesIdList:any[]): Observable<any> {
    return this.http.post(`${base_url}/${columnId}/catalog-mapping-column`, entitiesIdList,{
      headers:{
        "Content-Type":"application/json"
      }
    })
  }

  // to get related terms for column 
  getExternalColumnRelatedTerms(id:any): Observable<any>{
    return this.http.get(`${base_url}/column-attributes/${id}/related-term`)
  }
  getInternalColumnRelatedTerms(id:any): Observable<any>{
    return this.http.get(`${base_url}/column-related-terms/${id}`)
  }
  postExternalRelatedTerm(body:{colId:number,termName:string}):Observable<any>{
    let {colId,termName} = body
    return this.http.post(`${base_url}/column-attributes/${colId}`,{
      "columnAttributeType":"EXTERNAL_RELATED_TERM",
      "name":termName
    })
  }
  deleteExternalColumnRelatedTerms(id:number):Observable<any>{
    return this.http.delete(`${base_url}/column-attributes/${id}`)
  }

  // get input values
  getColumnInputValues(id:string): Observable<any>{
    return this.http.get(`${base_url}/column-attributes/${id}/value`)
  }  
  
  // post input values
  postColumnInputValues(id:any,body:any): Observable<any>{
    return this.http.post(`${base_url}/column-attributes/${id}`,
    {
      "columnAttributeType":"VALUE",
      "name":body.valueName,
      "description":body.description,
      "system":null
    }
    )
  }

  deleteColumnInputValues(id:string):Observable<any>{
    return this.http.delete(`${base_url}/column-attributes/${id}`)
  }

  // get column aliases
  getColumnAliases(id:any): Observable<any>{
    return this.http.get(`${base_url}/column-attributes/${id}/alias`)
  } 
  // post input values
  postColumnAliases(id:any,aliasName:string): Observable<any>{
    return this.http.post(`${base_url}/column-attributes/${id}`,
    {
      "columnAttributeType":"ALIAS",
      "name":aliasName,
      "description":null,
      "system":null
    }
    )
  }
  deleteColumnAlias(id:string):Observable<any>{
    return this.http.delete(`${base_url}/column-attributes/${id}`)
  }
  deleteTableMapping(tableId:any,entId:any): Observable<any>{
    return this.http.delete(`${base_url}/delete/${tableId}/catalog-mapping-table`,{body:entId})
  }

  deleteColMapping(columnId:any,entId:any): Observable<any>{
    return this.http.delete(`${base_url}/delete/${columnId}/catalog-mapping-column`,{body:entId})
  }
  

  

  





}
