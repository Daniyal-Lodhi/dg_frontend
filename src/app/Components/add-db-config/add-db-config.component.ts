import { Component } from '@angular/core';
import { DbConfigService } from 'src/app/services/dbConfig.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface dbConfig {
  url: string,
  username: string,
  password: string,
  type: string,
  catalogName: string,
  schemaName: string
}

@Component({
  selector: 'app-add-db-config',
  templateUrl: './add-db-config.component.html',
  styleUrls: ['./add-db-config.component.css']
})

export class AddDbConfigComponent {
  dbConfig: dbConfig = {
    url: "jdbc:mysql://localhost:3306",
    username: "root",
    password: "1234",
    type: "mysql",
    catalogName: "dump_file",
    schemaName: "dump_file"
  }

  constructor(private dbConfigService:DbConfigService,  private _snackBar: MatSnackBar){}


  addDbConfig(){
    this.dbConfigService.addDbConfig(this.dbConfig).subscribe({
      next(res){console.log(res)},
      error(error){alert("Some error occured")},
      complete(){alert("database configuratin added")}
    })
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000, // Duration in milliseconds (2 seconds in this example)
    });
  }
  
}
