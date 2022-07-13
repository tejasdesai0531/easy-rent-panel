import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {

  @Input() error = false;
  control?: AbstractControl;

  isFocused = false;

  value = ""

  onChange = (value: string) => {};
  onTouched = () => {};

  disabled = false;

  constructor() { }

  onFocus() {
    this.isFocused = true
  }
  onBlur() {
    this.isFocused = false
    this.markAsTouched()
  }

  ngOnInit(): void {
  }

  onValueChange() {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(this.value)
    }
  }

  writeValue(value: string): void {
    this.value = value
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.control = control
    return null
  }

  hasError(): boolean {

    if(this.error) return true

    if(!this.control) return false

    if(!this.control.touched) {
      return false
    }

    return !this.control.valid
  }


}
