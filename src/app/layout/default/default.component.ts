import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  isExpanded = 0;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() { 
    this.breakpointObserver
      .observe(['(max-width: 680px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sideBarOpen = false
        } else {
          this.sideBarOpen = true
        }
      });
  }

  openSideBar() {
    this.sideBarOpen = true;
  }

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen
  }

}
