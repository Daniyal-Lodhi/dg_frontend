import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnChanges {
  @Input() columnAttribute: any;
  @Input() modalIteration: number
  @Input() showModal: boolean
  @Input() attributeType: string;
  @Output() cancelModal = new EventEmitter<void>();
  @Output() deleteAttribute = new EventEmitter<void>();
  displayMsg: string = ""

  deleteModals: boolean[] = [];


  onDeleteAttribute() {
    this.deleteAttribute.emit();
    this.deleteModals[this.modalIteration] = false;
  }
  onCancelModal() {
    this.deleteModals[this.modalIteration] = false;
    this.cancelModal.emit();

  }

  ngOnChanges() {
    if (this.columnAttribute && this.columnAttribute.length > 0) {
      this.deleteModals = Array(this.columnAttribute.length).fill(false);
      // console.log(this.deleteModals)
    }
    else {
      this.deleteModals = [];
    }

    // to display the corresponding modal in this component
    if (this.showModal == true) {
      this.deleteModals[this.modalIteration] = true
    }
    // to show the respective delete warning message
    if (this.attributeType == "alias") {
      this.displayMsg = "alias"
    }
    if (this.attributeType == "relatedterms") {
      this.displayMsg = "related term"
    }
    if (this.attributeType == "IPV") {
      this.displayMsg = "input value"
    }
    if (this.attributeType == "buisnessdomain") {
      this.displayMsg = "input value"
    }

  }
}
