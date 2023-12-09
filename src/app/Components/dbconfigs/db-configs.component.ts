import { Component ,OnInit } from '@angular/core';
import { DbConfigService } from 'src/app/Services/dbConfig.service';

@Component({
  selector: 'app-db-configs',
  templateUrl: './db-configs.component.html',
  styleUrls: ['./db-configs.component.css']
})
export class dbConfigs implements OnInit  {

  dbConfigs:any = []
  Date(date:string){ 
    return new Date(date).toLocaleString()
  }
  toString(num:number){
    return num.toString()
  }
  loadData(btnid:string){
    let Loadbtn = document.getElementsByClassName(btnid.toString())
    // yahan pr url leke post api call krni hy service me
    Loadbtn[0].classList.add('hidden') 
    Loadbtn[1].classList.remove('hidden') 
    setTimeout(()=>{
    Loadbtn[0].classList.remove('hidden') 
    Loadbtn[1].classList.add('hidden')
    },2000) 
  }
  

  constructor(private dataSource:DbConfigService){
    this.getMetadata()
    // console.log(this.dbConfigs)
  }

  getMetadata(){
    // this.dbConfigs = this.dataSource.getDatabases()
    this.dbConfigs = this.dataSource.getDatabases().subscribe(dbConfig=>
      this.dbConfigs = dbConfig.data.content
      // console.log(dbConfig.data.content)
      )
      // console.log(this.dbConfigs)
  }







    ngOnInit(): void {
    }
  }


  

  

