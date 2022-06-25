import { Injectable, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();


  constructor(
    private toastr: ToastrService
  ) {
  }

  startLoadingIndicator() {
    setTimeout(() => {
      this._loading.next(true);
    }, 0);
  }

  stopLoadingIndicator() {
    this._loading.next(false);
  }

  showSuccessMsg(msg: string) {
    this.toastr.success(msg);
  } 

  showErrorMsg(msg: string) {
    this.toastr.error(msg)
  }
}
