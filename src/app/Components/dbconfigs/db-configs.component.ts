import { Component,Output, EventEmitter} from '@angular/core';
import { DbConfigService } from 'src/app/services/dbConfig.service';
import { DataService } from 'src/app/services/metaData.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-db-configs',
  templateUrl: './db-configs.component.html',
  styleUrls: ['./db-configs.component.css']
})
export class dbConfigs {

  dbConfigs: any = []
  alertModal: boolean = false;
  @Output() refreshTree: EventEmitter<null> = new EventEmitter();






  constructor(private dataSource: DbConfigService, private metadataService: DataService, private router: Router,  public _snackBar: MatSnackBar) {
    this.getDbConfig()
    
  }
  getDbConfig() {
    // this.dbConfigs = this.dataSource.getDatabases()
    this.dbConfigs = this.dataSource.getDatabases().subscribe(dbConfig => {
      console.log("hello world")
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
        console.log("success")
        this.openSnackBar()
      },
      error: (error) => { console.log(error)
        loadbtn.classList.remove("hidden")
        spinner.classList.remove("show") 
        this.openSnackBar()
      }
    })

  }
  openSnackBar() {
    this._snackBar.open('Data reloaded, Kindly refresh the Page','Ok', {
      duration: 2000,
    });
    this.refreshTree.emit()
  }
// load check
  navigateToMetadatacomp(dbId: number, loaded: any) {
    if (!loaded) {
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






