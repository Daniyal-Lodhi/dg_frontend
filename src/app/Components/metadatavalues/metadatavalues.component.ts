import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/metaData.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { businessDomainService } from 'src/app/services/businessDomain.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';







var TREE_DATA: any[] = [];

@Component({
  selector: 'app-metadatavalues',
  templateUrl: './metadatavalues.component.html',
  styleUrls: ['./metadatavalues.component.css']
})

export class MetadatavaluesComponent implements OnInit {
  TableData: any; // Overall data from the backend server
  Data: any = {}; // for data to view on screen
  relatedTerms: any[] = [] //for column related terms
  Object: any; // for Object operation in component
  b_domainData: any // to show chips
  showAddEntity: boolean = false
  separatorKeysCodes: number[] = [ENTER, COMMA];
  domainCtrl = new FormControl('');
  filtered_businesdomainEntities: Observable<any[]>;
  businesdomainEntities: any[] = [];
  allbusinesdomainEntities: any[] = [];
  announcer: LiveAnnouncer;
  InputValues: any[] = [];
  valueName: string = '';
  valueDescription: string = '';
  aliases: any[] = []
  aliasName: string = "";
  relatedTermName: string = '';
  selectedmappedEntities: any[] = []
  IPValueDeleteModal: Boolean = false;
  showAliasDModal: boolean[] = Array(this.aliases.length).fill(false);
  showIPVDModal: boolean[] = Array(this.InputValues.length).fill(false);
  ExRelTermDModal: boolean[] = Array(this.relatedTerms.length).fill(false);
  delTableBusinessEntityModal: boolean[] = [];
  delColBusinessEntityModal: boolean[] = [];





  @ViewChild('domainInput', { static: true }) domainInput: ElementRef<HTMLInputElement>;



  constructor(
    private metadataSource: DataService,
    private liveAnnouncer: LiveAnnouncer,
    private b_domainSource: businessDomainService,
    private router: ActivatedRoute
  ) {
    // getting the query params to specify db
    let paramsMap: any = router.snapshot.paramMap
    paramsMap = paramsMap.params.id.toString()
    this.metadataSource.setSelectedDbId(paramsMap)
    this.getMetaData();
    this.InjectTreeData();
    this.announcer = liveAnnouncer;
    this.filtered_businesdomainEntities = this.domainCtrl.valueChanges.pipe(
      startWith(null),
      map((domain: string | null) => this._filter(domain))
    );
    // setTimeout(()=>{
    //   console.log(this.delColBusinessEntityModal) ;
    // },2000) ;

  }

  // getting the data from server
  getMetaData(): void {
    this.metadataSource.getMetaDataValues().subscribe(res => {
      this.TableData = res.data
      this.Data = this.TableData[0];

      // this.Data = this.TableData[0]
      // console.log("data is ", this.TableData)
      this.InjectTreeData()
    })
  }

  getExternalColumnRelatedTerms(id: any) {
    // this.relatedTerms = null ;
    this.metadataSource.getExternalColumnRelatedTerms(id).subscribe(Ex_RValues => {
      this.relatedTerms = this.relatedTerms.filter((term) => {
        return term.type == "internal"
      })
      Ex_RValues.data.forEach((term) => {
        console.log(term.name)
        this.relatedTerms.push({ id: term.id, name: term.name, type: "external" });
      })
      // this.relatedTerms = Ex_RValues.data
      // console.log(Ex_RValues.data)
    })
  }

  getInternalColumnRelatedTerms(id: number) {
    this.metadataSource.getInternalColumnRelatedTerms(id).subscribe(In_RValues => {
      In_RValues.data.forEach((term) => {
        this.relatedTerms.push({ name: term, type: "internal" });
      })
    })
  }

  postExternalRelatedTerm() {
    this.metadataSource.postExternalRelatedTerm({ colId: this.Data.id, termName: this.relatedTermName }).pipe(
      tap(() => {
        this.getExternalColumnRelatedTerms(this.Data.id)
        this.relatedTerms.push({ name: this.relatedTermName, type: "external" })
        this.relatedTermName = "";
      })
    ).subscribe({
      complete: () => { console.log("success") },
      error: (error) => { console.log(error) }
    })
    // console.log(this.relatedTermName)
  }

  deleteExternalColumnRelatedTerms(id: number, type: string, i: number) {
    if (type == "external") {
      this.metadataSource.deleteExternalColumnRelatedTerms(id).subscribe({
        complete: () => { console.log("successfully deleted external related term") }
      })
      this.relatedTerms = this.relatedTerms.filter((term) => {
        if (term.type == "external") {
          return term.id != id;
        }
        else return term;
      })
    }
    else {
      alert("The internal related terms are fixed and cannot be deleted")
    }
    this.ExRelTermDModal[i] = false;

  }

  // tree structure 
  InjectTreeData() {
    if (this.TableData) {



      TREE_DATA = []
      for (var i = 0; i < this.TableData.length; i++) {
        var childrenList = []

        for (var j = 0; j < this.TableData[i].columnList.length; j++) {
          childrenList.push(
            {
              name: this.TableData[i].columnList[j].columnName,
              parentId: JSON.stringify(this.TableData[i].id),
              displayId: JSON.stringify(this.TableData[i].columnList[j].id)
            })
        }
        TREE_DATA[i] = {
          name: this.TableData[i].tableName,
          children: childrenList,
          displayId: JSON.stringify(this.TableData[i].id)
        }
      }


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

  displayTreeData(displayData: any): void {
    if (displayData.displayId && displayData.parentId === undefined) {
      for (let i = 0; i < this.TableData.length; i++) {
        if (this.TableData[i].id == displayData.displayId) {
          this.Data = this.TableData[i];
        }
      }
    } else {
      for (let i = 0; i < this.TableData.length; i++) {
        if (this.TableData[i].id == displayData.parentId) {
          for (let j = 0; j < this.TableData[i].columnList.length; j++) {
            if (this.TableData[i].columnList[j].id == displayData.displayId) {
              this.Data = this.TableData[i].columnList[j];
              this.aliases = null
              this.InputValues = null;
              this.relatedTerms = [];
              this.getAliases(this.Data.id);
              this.getInputValues(this.Data.id)
              this.getExternalColumnRelatedTerms(this.Data.id)
              this.getInternalColumnRelatedTerms(this.Data.id);

              // console.log(this.Data)

              break;
            }
          }
          break;
        }
      }

    }
    console.log(this.Data)
    this.configuringbzMappingModal()
  }
  // tree end


  setChips(): void {
    this.b_domainData = this.b_domainSource.getBusinessDomainData().subscribe(domainData => {
      this.b_domainData = domainData.data.content
      // this.b_domainData = this.b_domainData.data.content (for real integration)
      this.b_domainData = this.b_domainData

      for (let i = 0; i < this.b_domainData.length; i++) {
        for (let j = 0; j < this.b_domainData[i].businessDomainEntitiesDtoList.length; j++) {
          let entity = {
            id: this.b_domainData[i].businessDomainEntitiesDtoList[j].id,
            name: `${this.b_domainData[i].name}.${this.b_domainData[i].businessDomainEntitiesDtoList[j].name}`
          };
          this.allbusinesdomainEntities.push(entity);
        }
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const value: any = (event.value || '').trim();
    if (value.name) {
      this.businesdomainEntities.push(value);
      event.chipInput!.clear();

    }

    event.chipInput!.clear();
    this.domainCtrl.setValue(null);
  }

  remove(entity: any): void {
    const index = this.businesdomainEntities.findIndex(item => item.id === entity.id && item.name === entity.name);
    if (index >= 0) {
      this.businesdomainEntities.splice(index, 1);
      this.announcer.announce(`Removed ${entity.name}`);
    }
  }
  trackByFn(index: number, item: any): any {
    return item;
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    // Push both id and name to the array
    const selectedEntity = this.allbusinesdomainEntities.find(entity => entity.name === event.option.viewValue);
    if (selectedEntity) {
      this.businesdomainEntities.push({ id: selectedEntity.id, name: event.option.viewValue });
      this.domainCtrl.setValue(null);


    }

    if (this.domainInput && this.domainInput.nativeElement) {
      // Clear the input field after selecting an entity
      this.domainInput.nativeElement.value = '';
    }

    this.domainCtrl.setValue(null);
  }

  private _filter(value: any): any[] {
    const filterValue = (value || '').toString().toLowerCase();

    // Get the names of the selected entities
    var selectedEntityNames = this.businesdomainEntities.map(entity => entity.name.toLowerCase());
    this.selectedmappedEntities = selectedEntityNames


    // Filter based on the input, excluding the selected entities
    return this.allbusinesdomainEntities
      .filter(entity => {
        const lowerCaseName = entity.name.toLowerCase();
        return !selectedEntityNames.some(selectedName => selectedName === lowerCaseName) && lowerCaseName.includes(filterValue);
      });
  }


  toggleshowAddEntity() {
    this.showAddEntity = this.showAddEntity === true ? false : true;
  }
  mapTableAndEntities(id: any) {
    const entityListArr = this.businesdomainEntities.map(entity => entity.id);
    this.metadataSource.mapEntitiesWithTable(id, entityListArr).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.businesdomainEntities.forEach((item) => {
          let index = item.name.indexOf('.')
          let name = item.name.substring(item.name.length, index + 1)

          this.Data.mappedBusinessDomainEntitiesDto.push({ id: item.id, name })
          this.businesdomainEntities = []
        })
      })
    ).subscribe({
      next(value) {
        console.log(value)
      },
      complete() { },
    })
    this.showAddEntity = false
    // console.log(entityListArr)
  }
  mapColumnAndEntities(id: any) {
    const entityListArr = this.businesdomainEntities.map(entity => entity.id);
    this.metadataSource.mapEntitiesWithColumn(id, entityListArr).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.businesdomainEntities.forEach((item) => {
          let index = item.name.indexOf('.')
          let name = item.name.substring(item.name.length, index + 1)
          this.Data.columnEntityMapDto.push({ id: item.id, name })
          console.log(this.businesdomainEntities)
          this.businesdomainEntities = []

        })
      })
    ).subscribe({

      complete() { },
    })
    this.showAddEntity = false
    // console.log(entityListArr, id)
  }

  // get input values for column
  getInputValues(id: any) {
    this.metadataSource.getColumnInputValues(id).pipe(
      tap(() => {
        let inputs = document.getElementsByClassName('inputvalues') as HTMLCollectionOf<HTMLInputElement>;
        inputs[0].value = '';
        inputs[1].value = '';


      })
    ).subscribe(res => {
      this.InputValues = res.data;
      // console.log(this.InputValues)

    })
  }



  addInputValues() {
    let body = {
      valueName: this.valueName,
      description: this.valueDescription
    }
    this.metadataSource.postColumnInputValues(this.Data.id, body).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.getInputValues(this.Data.id)
      })
    ).subscribe({
      error(err) {
        console.log(err)
      },
      complete() {
        // console.log('success')

      },
    })
  }
  deleteInputValues(id: string, i: number) {
    this.metadataSource.deleteColumnInputValues(id).subscribe({
      error: (error) => console.log(error)
    })
    this.InputValues = this.InputValues.filter((val) => val.id != id);
    // this.InputValues.splice(index,1) ;
    this.showIPVDModal[i] = false;
  }

  // get aliases 
  getAliases(id: any) {
    this.metadataSource.getColumnAliases(id).subscribe(res => {
      this.aliases = res.data
      // console.log(this.aliases, this.Data.id)
    })
  }

  postAlias() {
    this.metadataSource.postColumnAliases(this.Data.id, this.aliasName).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.getAliases(this.Data.id);
        this.aliases.push({ name: this.aliasName })
        // Clear the input field 
        this.aliasName = "";
      })
    ).subscribe({
      error(err) {
        console.log(err)
      },
      complete() {
        // console.log('success')
      },
    })
  }

  deleteAlias(aliasId: string, aliasName: string, i: number) {
    this.metadataSource.deleteColumnAlias(aliasId).pipe(tap(() => {
      // let aliasIndex = this.aliases.indexOf((alias:{id:string})=>alias.id==aliasId)
      // this.aliases = this.aliases.filter(alias => alias.id !== aliasId);
      this.aliases = this.aliases.filter(alias => alias.id !== aliasId);
      console.log(aliasName)
      this.showAliasDModal[i] = false;

    })).subscribe({
      error(error) { console.log(error) },
      complete() { },
    })
    // console.log(aliasId)
  }

  // to delete column mapping
  deleteTableMapping(entId: any, i: number) {
    // console.log("the delete url is ", `http://127.0.0.1:8080/api/internal/delete/${this.Data.id}/catalog-mapping-column`, entId)

    this.metadataSource.deleteTableMapping(this.Data.id, entId).pipe(tap(() => {
      this.delTableBusinessEntityModal[i] = false;
    })).subscribe({
      next(value) {
        // console.log('Observable emitted the next value: ' + value);
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log('success')

      },
    })
    let index = this.Data.mappedBusinessDomainEntitiesDto.findIndex(entity => entity.id === entId);
    this.Data.mappedBusinessDomainEntitiesDto.splice(index, 1)

  }
  deleteColMapping(entId: any, i: number) {
    try {
      this.metadataSource.deleteColMapping(this.Data.id, entId).pipe(tap(() => {
        this.delColBusinessEntityModal[i] = false;
      })).subscribe({
        complete() {
          console.log('success')

        },
      })
    }
    catch (error) { }
    let index = this.Data.columnEntityMapDto.findIndex(entity => entity.id === entId);
    this.Data.columnEntityMapDto.splice(index, 1)
  }
  configuringbzMappingModal() {
    if (this.Data.columnName) {
      this.delColBusinessEntityModal = Array(this.Data?.columnEntityMapDto.length).fill(false);
      console.log(this.delColBusinessEntityModal)
    }
    else {
      this.delTableBusinessEntityModal = Array(this.Data?.mappedBusinessDomainEntitiesDto.length).fill(false);
      console.log(this.delTableBusinessEntityModal)
      // console.log("object")
    }
  }
  getLength(item: any) {
    return item.length
  }
  Date(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }
  LengthOf(x: any) {
    return x.length
  }

  test() {
    console.log(this.allbusinesdomainEntities);
  }
  ngOnInit(): void {
    this.Object = Object;

    this.setChips()
  }
}
