import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'lib-toggle-vertical',
  templateUrl: './toggle-vertical.component.html',
  styleUrls: ['./toggle-vertical.component.scss']
})
export class ToggleVerticalComponent implements OnInit {
  @Input() name: string = 'name';
  @Input() label1: string = 'label1';
  @Input() value1: string = 'value1';
  @Input() label2: string = 'label2';
  @Input() value2: string = 'value2';
  @Input() light: boolean = false;

  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log(e.srcElement.value)
    this.switchValue.emit(e.srcElement.value);
  }

}
