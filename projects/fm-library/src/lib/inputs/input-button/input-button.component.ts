import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleCheck, faCircleXmark, faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {

  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() type: string = 'nebenkosten';
  @Input() value: string = 'value';
  @Input() touched: boolean = false;
  @Input() short: boolean = false;
  @Input() unit: string = '€';
  @Input() info: boolean = false;
  @Input() infoText: string = 'info text';
  @Input() infoHeader: string = 'info header';
  @Input() light: boolean = false;

  faCircleExclamation = faCircleExclamation;
  faCircleInfo = faCircleInfo;

  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
  }

  getValue() {
    this.inputValue.emit(this.type);
  }

}
