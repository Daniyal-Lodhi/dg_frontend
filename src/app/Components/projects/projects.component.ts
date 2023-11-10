import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

interface Project{
  websiteProjects:any[]
  AndroidProjects:any[]
  AiProjects:any[]
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent {
  projects : Project
  render:string





    constructor(private dataSource:DataService, private router:ActivatedRoute){
        this.projects = dataSource.getData().projects
        // console.log(this.projects)
        this.router.queryParams.subscribe((data:any)=>{
          this.render = data.show
        })

    }
}
