import { Component, Output, EventEmitter } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Data } from 'src/app/Data';
import { DataService } from 'src/app/Services/data.service';



// tree Interface

// tree data


const TREE_DATA: any[] = [
  {
    name: 'Business domain',
    url:'businessdomains',
    children: [
      { name: 'Users data',
      url:'businessdomains',
      show:'customerdata'

    
     },
      { name: 'Product catalog',
      url:'businessdomains',
      show:'productcataloge'

    },
      { name: 'Financial records',
      url:'businessdomains',
      show:'financialRecords'

    },
    ],
  },
  {
    name: 'Orders',
    children: [
      {
        name: 'Purchase orders',
        show: 'purchaseOrder',
        url: 'orders'
      },
      {
        name: 'Sales Orders ',
        show: 'salesOrder',
        url: 'orders'

      }
    ],
  },
  {
    name: 'Projects',

    children: [
      {
        name: 'Website Projects',
        url: 'projects',
        show:'webProjects'
      },
      {
        name: 'Android Projects',
        url: 'projects',
        show:'androidProjects'

      },
      {
        name: 'Ai Projects',
        url: 'projects',
        show:'aiProjects'

      },
    ],
  },
 
  { 
    name: 'Tags',
    children: [
      { name: 'Big projects' },
      { name: 'Top Sales' },

    ],
  },

];

/** Flat node with expandable and level information */

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],

})
export class SideNavComponent {
  treedata: Data;
  route: string


  private transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      show: node.show,
      url: node.url,
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

  constructor(private datasource: DataService) {
    this.dataSource.data = TREE_DATA;
    this.treedata = datasource.getData()
    // console.log(this.treedata)
  }

  hasChild = (_: number, node: any) => node.expandable;



}
