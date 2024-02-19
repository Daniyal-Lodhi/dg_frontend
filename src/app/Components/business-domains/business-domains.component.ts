import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { businessDomainService } from 'src/app/services/businessDomain.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
// import { dbConfigs } from '../dbconfigs/db-configs.component';
import { tap } from 'rxjs/operators';



let TREE_DATA = []


@Component({
  selector: 'app-business-domains',
  templateUrl: './business-domains.component.html',
  styleUrls: ['./business-domains.component.css']
})
export class BusinessDomainsComponent implements OnInit {
  // original business domain data array for business domains, also serves as tree data 
  businessDomainData: any;
  // data to show on side screen 
  Data: any;
  parentNode: boolean
  addBusinessModal: boolean  //add business domain modal
  Object: any
  Modal: boolean  //add entity modal
  entityName: string
  entityDescription: string
  treeData: any;
  deleteModal: boolean = false;
  addEntityLoader: boolean = false;
  deleteModals: boolean[] = [];





  constructor(private businessDdataSource: businessDomainService) {
    // calling fucntion
    this.getBusinessDomainData();
  }

  // function to get business domain data from dataservice
  getBusinessDomainData() {
    this.businessDdataSource.getBusinessDomainData().subscribe(b_data => {
      this.businessDomainData = b_data.data.content
      this.Data = this.businessDomainData[0]
      console.log(b_data)
      this.InjectTreeData()
    });
  }
  // handle add entity submit
  addEntity(businessDomainId) {
    this.addEntityLoader = true;
    this.businessDdataSource.addbusinessDomainEntity(businessDomainId, {
      name: this.entityName,
      description: this.entityDescription
    }).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.Data.businessDomainEntitiesDtoList.push({name:this.entityName})
      })
    ).subscribe({
      next(value) {
        console.log('Observable emitted the next value: ' + value);
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log('success')
        let entityinputs = document.getElementsByClassName('entityInput') as HTMLCollectionOf<HTMLInputElement>
        entityinputs[0].value  = '' 
        entityinputs[1].value = ''

      },
    })
    this.addEntityLoader = false;
    console.log({
      "Entity Name": this.entityName,
      "Entity Description": this.entityDescription
    })
  }
  // delete business domain entity 
  deleteEntity(id: any, index: number) {
    this.deleteModals[index] = false;

    this.businessDdataSource.deleteBusinessDomainEntity(id).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.getBusinessDomainData();
      })
    ).subscribe({
      next(value) {
        console.log('Observable emitted the next value: ' + value);
      }, 
      error(err) {
        console.log(err)
        alert(err.error.message)
      },
      complete() {
        console.log('success')

      },
    })
    this.deleteModal = false;
    console.log(id)
  }

  //tree structure
  InjectTreeData() {
    if (this.businessDomainData) {
      TREE_DATA = []
      for (var i = 0; i < this.businessDomainData.length; i++) {
        // var childrenList = []

        // for (var j = 0; j < this.businessDomainData[i].businessDomainEntitiesDtoList.length; j++) {
        //   childrenList.push(
        //     {
        //       name: this.businessDomainData[i].businessDomainEntitiesDtoList[j].name,
        //       displayId: JSON.stringify(this.businessDomainData[i].businessDomainEntitiesDtoList[j].id),
        //       parentId:JSON.stringify(this.businessDomainData[i].id) 
        //     })
        // }  
        TREE_DATA[i] = {
          name: this.businessDomainData[i].name,
          // children: childrenList,
          displayId: JSON.stringify(this.businessDomainData[i].id)
        }
      }
      // console.log(this.Data)
      // console.log("injecting tree")



      this.dataSource.data = TREE_DATA;
    }
  }
  private transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      show: node.show,
      displayId: node.displayId,
      parentId: node.parentId,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);




  hasChild = (_: number, node: any) => node.expandable;


  // funcion to display the business domain data based on display and parent Id coming from tree
  displayTreeData(displayData: any): void {
    this.addBusinessModal = false
    for (let i = 0; i < this.businessDomainData.length; i++) {
      if (this.businessDomainData[i].id == displayData.displayId) {
        this.Data = this.businessDomainData[i];
        console.log(this.Data)
      }
    }
  }

  // tree end 


  // to show Modal for adding business domain entity list
  toggleModal() {
    this.Modal ? this.Modal = false : this.Modal = true;
  }

  // to refresh tree from child component event
  refreshTree(){
    this.getBusinessDomainData()
  }


  ngOnInit(): void {
    this.parentNode = true;
    // this.Data = this.businessDomainData[0]
    this.Object = Object
    this.Modal = false;
    if (this.Data && this.Data.businessDomainEntitiesDtoList) {
      this.deleteModals = Array(this.Data.businessDomainEntitiesDtoList.length).fill(false);
    }
  }
}
