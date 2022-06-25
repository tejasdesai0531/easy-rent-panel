import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output() editEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();
  @Output() optionSet = new EventEmitter()

  constructor() {
  }

  setOptions(option: string) {
    if(option === 'edit' || option === 'add') {
      this.optionSet.emit(option)
    }
  }

  editButtonClicked() {
    this.editEvent.emit();
  }

  addButtonClick() {
    this.addEvent.emit()
  }
}
