import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() nextPageEvent = new EventEmitter<any>();

  @Input() items: any = []
  @Input() columns: any = []
  @Input() totalRecords = 0
  @Input() offset = 0

  pageSize = 5
  curentPage = 0

  constructor() { }

  ngOnInit(): void {
  }

  pageEvent(event: PageEvent) {
    this.curentPage = event.pageIndex
    this.pageSize = event.pageSize

    this.nextPageEvent.emit({
      limit: this.pageSize, 
      offset: this.curentPage * this.pageSize
    })
  }

}
