import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Output() public dateValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();
  success: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    this.success = true;
    this.dateValue.emit(e.value);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
