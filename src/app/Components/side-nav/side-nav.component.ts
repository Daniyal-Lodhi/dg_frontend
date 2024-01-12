import { Component, Output, EventEmitter, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { dbConfigs } from '../dbconfigs/db-configs.component';


// tree Interface

// tree data  


let TREE_DATA = [] 
/** Flat node with expandable and level information */

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
  providers: [dbConfigs]

})
export class SideNavComponent implements OnInit {
  // this is the data having the input value for indexing in different component and changes per component
  @Input() treeData: any;
  // decides from which component the data is coming from
  @Input() forComponent: string;
  @Output() triggerDisplayId: EventEmitter<object> = new EventEmitter();

  constructor() { }

  // To Inject Data into Tree
  InjectTreeData() {
    if (this.treeData) {
      if (this.forComponent === 'businessDomain') {
        TREE_DATA = [] 
        for (var i = 0; i < this.treeData.length; i++) {
          var childrenList = []

          for (var j = 0; j < this.treeData[i].businessDomainEntitiesDtoList.length; j++) {
            childrenList.push(
              {
                name: this.treeData[i].businessDomainEntitiesDtoList[j].name,
                displayId: JSON.stringify(this.treeData[i].businessDomainEntitiesDtoList[j].id),
                parentId:JSON.stringify(this.treeData[i].id) 
              })
          }
          TREE_DATA[i] = {
            name: this.treeData[i].name,
            children: childrenList,
            displayId: JSON.stringify(this.treeData[i].id)
          }
        }
      }


      if (this.forComponent === 'metaDataValues') {
        TREE_DATA = []
        for (var i = 0; i < this.treeData.length; i++) {
          var childrenList = []

          for (var j = 0; j < this.treeData[i].columnList.length; j++) {
            childrenList.push(
              {
                name: this.treeData[i].columnList[j].columnName,
                parentId:JSON.stringify(this.treeData[i].id),
                displayId: JSON.stringify(this.treeData[i].columnList[j].id)
              })
          }
          TREE_DATA[i] = {
            name: this.treeData[i].tableName,
            children: childrenList,
            displayId: JSON.stringify(this.treeData[i].id)
          }
        }
      }
      console.log("tree data is ",TREE_DATA)

      this.dataSource.data = TREE_DATA;
    }
  }
  


  // function to trigger the trigger Id event to parent metadatavalues componenet
  InvokeIdTrigger(displayData:object ) {
    this.triggerDisplayId.emit(displayData)
    // console.log(displayId)
  }

  private transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      show: node.show,
      displayId: node.displayId,
      parentId : node.parentId,
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



  ngOnInit(): void {

    this.InjectTreeData()


    // console.log(TREE_DATA)
  }
}
