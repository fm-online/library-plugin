import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'lib-toggle-vertical',
  templateUrl: './toggle-vertical.component.html',
  styleUrls: ['./toggle-vertical.component.scss']
})
export class ToggleVerticalComponent {
  @Input() name: string = 'name';
  @Input() options: any;
  @Input() light: boolean = false;
  @Input() localValue: string = 'localValue';

  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  getCheckedOption(value: string) {
    return this.localValue === value;
  }

  sendValue(e: any) {
    this.localValue = e;
    this.switchValue.emit(e.srcElement.value);
  }

}
