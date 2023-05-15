import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() name: string = 'name';
  @Input() label1: string = 'label1';
  @Input() value1: string = 'value1';
  @Input() label2: string = 'label2';
  @Input() value2: string = 'value2';
  @Input() light: boolean = false;
  faCheck = faCircleCheck
  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log(e.srcElement.value)
    this.switchValue.emit(e.srcElement.value);
  }

}
