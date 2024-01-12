import { Component, inject ,Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { businessDomainService } from 'src/app/services/businessDomain.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';

interface Entities {
  name: String,
  description: String
}

@Component({
  selector: 'app-add-business-domain',
  templateUrl: './add-business-domain.component.html',
  styleUrls: ['./add-business-domain.component.css'],
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class AddBusinessDomainComponent {
  @Output() refreshTree: EventEmitter<null> = new EventEmitter();
  @Output() return: EventEmitter<null> = new EventEmitter();
  domainName: string;
  domainDescription: string;
  durationInSeconds = 5;
  constructor(private businessDomainService: businessDomainService, public _snackBar: MatSnackBar) {
  }


  // chips input
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  entites: Entities[] = [];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Entity
    if (value) {
      this.entites.push({ name: value, description: "test description" });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(Entity: any): void {
    const index = this.entites.indexOf(Entity);

    if (index >= 0) {
      this.entites.splice(index, 1);

      this.announcer.announce(`Removed ${Entity}`);
    }
  }

  edit(Entity: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove Entity if it no longer has a name
    if (!value) {
      this.remove(Entity);
      return;
    }

    // Edit existing Entity
    const index = this.entites.indexOf(Entity);
    if (index >= 0) {
      this.entites[index].name = value;
    }
  }




  handleAddBusinessDomain() {
    // console.log("domain Name is: ",this.domainName,"\n domain description is: ",this.domainDescription,"\n domain entites are: ",this.entites)
    let domainBody = {
      id: 2,
      name: this.domainName,
      description: this.domainDescription,
      businessDomainEntitiesDtoList: this.entites
    }
    this.businessDomainService.addbusinessDomain(domainBody).pipe(
      // Use the tap operator to perform a side effect when the observable emits a value
      tap(() => {
        this.openSnackBar()
      })
    ).subscribe({
      next(value) {
        console.log(value)
      }, error(err) {
        console.log(err)
      }, complete() {
        console.log("success")

      },
    })
    console.log(domainBody)
  }

  return_back(){
    this.return.emit()
  }
  openSnackBar() {
    this._snackBar.open('Business domain added successfully', 'ok', {
      duration: 3000
    });
    this.refreshTree.emit()
  }
}
