import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'lib-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() name: string = 'name';
  @Input() label1: string = 'label1';
  @Input() value1: string = 'value1';
  @Input() label2: string = 'label2';
  @Input() value2: string = 'value2';
  @Input() inputDisabled: boolean = false;
  @Input() localValue: string = 'localValue';
  @Input() light: boolean = false;

  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  getCheckedOption(value: string) {
    return this.localValue === value;
  }

  getValue(e: any) {
    this.switchValue.emit(e.srcElement.value);
  }

}
