import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-toggle-horizontal',
  templateUrl: './toggle-horizontal.component.html',
  styleUrls: ['./toggle-horizontal.component.scss']
})
export class ToggleHorizontalComponent {

  @Input() name: string = 'name';
  @Input() label?: string;
  @Input() options: any;
  @Input() light: boolean = false;
  @Input() localValue: string = 'localValue';
  @Input() elementWidth: string = '110px';

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
