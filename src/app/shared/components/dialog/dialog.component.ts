import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title = 'appBootstrap';

  @ViewChild('mymodal', { static: true }) mymodal!: ElementRef;

  private _showDialog = false;
  @Input() set showDialog(value: boolean) {
    console.log("Dialog : ", value)
    this._showDialog = value;
    this.handleDialog()
 }
  
  closeResult?: string;
  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    
  }

  handleDialog() {
    if(this._showDialog){
      this.open()
    } else {
      this.close()
    }
  }

  close() {
    this.modalService.dismissAll()
  }
    
  open() {
    this.modalService.open(this.mymodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
