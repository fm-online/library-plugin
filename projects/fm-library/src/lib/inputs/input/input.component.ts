import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleCheck, faCircleInfo, faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() placeholder: string = '0,00';
  @Input() value: string = 'value';
  @Input() touched: boolean = false;
  @Input() type: string = 'text';
  @Input() unit: string = '€';
  @Input() info: boolean = false;
  @Input() infoText: string = 'info text';
  @Input() infoHeader: string = 'info header';
  @Input() error: boolean = false;
  @Input() errorText: string = 'error text  ';
  @Input() light: boolean = false;

  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  faCircleExclamation = faCircleExclamation;
  faCircleInfo = faCircleInfo;

  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
  }

  getValue(e: any) {
    const inputValue = e.srcElement.value.replaceAll('.', '').replaceAll(',', '.');
    this.value = parseInt(inputValue).toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 0 });
    console.log(e.srcElement.value);
    this.inputValue.emit(e.srcElement.value);
  }

  getInfo(e: boolean) {
    console.log(e)
  }

}
