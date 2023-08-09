import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment/locale/de';

@Component({
  selector: 'lib-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})

export class InputDateComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() maxDate!: Date;
  @Input() minDate!: Date;
  @Input() value!: Date;
  @Input() touched: boolean = false;
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() placeholder!: string;
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Output() public dateValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();
  success: boolean = false;

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {
    this._locale = 'de';
    this._adapter.setLocale(this._locale)
  }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log(e.value)
    this.value = e.value;
    this.dateValue.emit(e.value);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
