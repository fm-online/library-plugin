import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() type: string = '';
  @Input() name: string = 'name';
  @Input() checked: boolean = false;
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    this.checked = e.srcElement.checked;
    const checked = e.srcElement.checked;
    const name = e.srcElement.name;
    const value = e.srcElement.value;
    this.checkboxValue.emit({name, value, checked});
}

}
