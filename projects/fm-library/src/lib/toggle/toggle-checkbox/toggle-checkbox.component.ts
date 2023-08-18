import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-toggle-checkbox',
  templateUrl: './toggle-checkbox.component.html',
  styleUrls: ['./toggle-checkbox.component.scss']
})
export class ToggleCheckboxComponent implements OnInit {
  @Input() form: any;
  @Input() label: string = 'label';
  @Input() name: string = 'name'; 
  @Input() checked: boolean = false;
  @Input() light: boolean = false;
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    this.checkboxValue.emit(e.srcElement.checked);
  }

}
