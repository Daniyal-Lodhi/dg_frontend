import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/Services/metaData.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { businessDomainService } from 'src/app/Services/businessDomain.service';

@Component({
  selector: 'app-metadatavalues',
  templateUrl: './metadatavalues.component.html',
  styleUrls: ['./metadatavalues.component.css']
})
export class MetadatavaluesComponent implements OnInit {
  ColumnsData: any; // Overall data from the backend server
  Data: any; // for data to view on screen
  Object: any; // for Object operation in component
  showAddEntity:boolean = false
  separatorKeysCodes: number[] = [ENTER, COMMA];
  domainCtrl = new FormControl('');
  filtered_businesdomainEntities: Observable<any[]>;
  businesdomainEntities: any[] = [];
  allbusinesdomainEntities: any[] = [];
  @ViewChild('domainInput', { static: true }) domainInput: ElementRef<HTMLInputElement>;
  announcer: LiveAnnouncer;

  

  constructor( 
    private dataSource: DataService,
    private liveAnnouncer: LiveAnnouncer,
    private b_domainSource: businessDomainService
  ) {
    this.announcer = liveAnnouncer;
    this.getColumnsData();
    this.Data = this.ColumnsData[0];
    this.setChips();
    this.filtered_businesdomainEntities = this.domainCtrl.valueChanges.pipe(
      startWith(null),
      map((domain: string | null) => (domain ? this._filter(domain) : this.allbusinesdomainEntities.slice()))
    );
  }

  Date(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }

  getColumnsData(): void {
    this.ColumnsData = this.dataSource.getMetaDataValues();
  }

  setChips(): void {
    let b_domainData = this.b_domainSource.getBusinessDomainData();
    for (let i = 0; i < b_domainData.length; i++) {
      for (let j = 0; j < b_domainData[i].businessDomainEntitiesDtoList.length; j++) {
        let entity = {
          id: b_domainData[i].businessDomainEntitiesDtoList[j].id,
          name: `${b_domainData[i].name}.${b_domainData[i].businessDomainEntitiesDtoList[j].name}`
        };
        this.allbusinesdomainEntities.push(entity);
      }
    }
    console.log(this.allbusinesdomainEntities);
  }

  displayData(displayData: any): void {
    if (displayData.displayId && displayData.parentId === undefined) {
      for (let i = 0; i < this.ColumnsData.length; i++) {
        if (this.ColumnsData[i].id == displayData.displayId) {
          this.Data = this.ColumnsData[i];
        }
      }
    } else {
      for (let i = 0; i < this.ColumnsData.length; i++) {
        if (this.ColumnsData[i].id == displayData.parentId) {
          for (let j = 0; j < this.ColumnsData[i].columnList.length; j++) {
            if (this.ColumnsData[i].columnList[j].id == displayData.displayId) {
              this.Data = this.ColumnsData[i].columnList[j];
              break;
            }
          }
          break;
        }
      }
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.businesdomainEntities.push(value);
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
    }
  
    if (this.domainInput && this.domainInput.nativeElement) {
      this.domainInput.nativeElement.value = '';
    }
    this.domainCtrl.setValue(null);
  }
  

  private _filter(value: any): any[] {
    const filterValue = value.name.toLowerCase();
    return this.allbusinesdomainEntities.filter(domain => domain.name.toLowerCase().includes(filterValue));
  }

  toggleshowAddEntity(){
    this.showAddEntity = this.showAddEntity===true?false:true ;
  }
  mapEntities(){
    
    console.log(this.businesdomainEntities)
  }



  ngOnInit(): void {
    this.Object = Object;
  }
}
