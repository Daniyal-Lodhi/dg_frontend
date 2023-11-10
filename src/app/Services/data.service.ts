import { Injectable } from '@angular/core';
import { Data } from '../Data';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  DataList:Data;
  getData():Data{
    return JSON.parse(localStorage.getItem('data'))
  }
  constructor() {
    this.DataList = this.getData()
   }
}
