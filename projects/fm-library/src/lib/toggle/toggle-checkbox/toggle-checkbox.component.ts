import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-toggle-checkbox',
  templateUrl: './toggle-checkbox.component.html',
  styleUrls: ['./toggle-checkbox.component.scss']
})
export class ToggleCheckboxComponent implements OnInit {
  @Input() form: any;
  @Input() label: string = 'label';
  @Input() dynLabelClassName?: string;
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

  getLabelClassNames() {
    let label = 'da-switch-label';
    if (this.light) {
      label = label + ' light';
    }
    if (this.dynLabelClassName) {
      label = label + ' ' + this.dynLabelClassName;
    }
    return label;
  }
}
