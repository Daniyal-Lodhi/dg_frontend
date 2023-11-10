import { Component ,OnInit } from '@angular/core';
import { DbConfigServiceService } from 'src/app/Services/db-config-service.service';

@Component({
  selector: 'app-select-databases',
  templateUrl: './select-databases.component.html',
  styleUrls: ['./select-databases.component.css']
})
export class SelectDatabasesComponent implements OnInit  {

  dbMetaData:any
  

  constructor(private dataSource:DbConfigServiceService){
    this.getMetadata()
  }

  getMetadata(){
    this.dataSource.getMetaData('1').subscribe(data=>{
      this.dbMetaData = data ;
    })
    
  }

  

  ngOnInit(): void {
  }
}
