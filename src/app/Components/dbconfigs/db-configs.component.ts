import { Component } from '@angular/core';
import { DbConfigService } from 'src/app/services/dbConfig.service';
import { DataService } from 'src/app/services/metaData.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-db-configs',
  templateUrl: './db-configs.component.html',
  styleUrls: ['./db-configs.component.css']
})
export class dbConfigs {

  dbConfigs: any = []
  alertModal: boolean = false;





  constructor(private dataSource: DbConfigService, private metadataService: DataService, private router: Router) {
    this.getDbConfig()
  }

  getDbConfig() {
    // this.dbConfigs = this.dataSource.getDatabases()
    this.dbConfigs = this.dataSource.getDatabases().subscribe(dbConfig => {
      console.log(dbConfig.data.content);
      this.dbConfigs = dbConfig.data.content
    }
    )
  }
  loadData(dbid: string) {
    const loadbtn = document.getElementById("loadbtn" + dbid)
    const spinner = document.getElementById("loadspinner" + dbid)
    loadbtn.classList.add("hidden")
    spinner.classList.add('show')
    this.dataSource.refreshDatabase(dbid).subscribe({
      complete: () => {
        loadbtn.classList.remove("hidden")
        spinner.classList.remove("show")
      },
      error: (error) => { console.log(error)
        loadbtn.classList.remove("hidden")
        spinner.classList.remove("show") }
    })

  }

  navigateToMetadatacomp(dbId: number, status: any) {
    if (status != true) {
      this.alertModal = true
    }
    else {
      this.router.navigate(['/metadatavalues', dbId]);
    }
  }
  Date(date: string) {
    return new Date(date).toLocaleString()
  }
  toString(num: number) {
    return num.toString()
  }

}






