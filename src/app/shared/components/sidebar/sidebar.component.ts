import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChildren('panel') pannels?: QueryList<MatExpansionPanel>;

  isSideBarOpen = true;

  @Input() set sideBarOpen(value: boolean) {
      this.isSideBarOpen = value

      if(!this.isSideBarOpen) {
        this.pannels?.toArray().forEach(panel => panel.close())
      }
  }
  @Output() expandEvent = new EventEmitter<string>();

openGroup(event: any) {
    if(!this.isSideBarOpen) {
        this.expandEvent.emit()
    }
}
closeGroup(event: any) {
    console.log(event)
}

  menuList = [
    {
        "text": "Product",
        "icon": "inventory_2",
        "children": [
            {
                "text": "Product List",
                "icon": "view_list",
                "routerLink": "/product"
            }
        ]
    },
    {
        "text": "Addon",
        "icon": "add_to_queue",
        "children": [{
                "text": "Addon List",
                "icon": "view_list",
                "routerLink": "/addon"
            }
        ]
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
