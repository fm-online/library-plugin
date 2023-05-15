import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

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
  @Input() info: boolean = false;
  @Input() icon = faCircleCheck;
  @Output() public dateValue:EventEmitter<any> = new EventEmitter<string>();
  success: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log('change', e.value);
    this.success = true;
    this.dateValue.emit(e.value);
  }

  getInfo(e: boolean) {
    console.log(e)
  }

}
