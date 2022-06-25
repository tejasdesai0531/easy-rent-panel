import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderService } from 'src/app/core/services/util/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  isAdd = false
  isEdit = false

  constructor(private headerService: HeaderService) { }

  ngOnInit() { 

    this.headerService.optionSet.subscribe((option: string) => {
      if(option === 'add') {
        this.isAdd = true
        this.isEdit = false
      } else if(option === 'edit') {
        this.isEdit = true
        this.isAdd = false
      }
    })

  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  add() {
    this.isAdd = !this.isAdd
    this.headerService.addButtonClick()
  }

  edit() {
    this.isEdit = !this.isEdit
    this.headerService.editButtonClicked()
  }

}
