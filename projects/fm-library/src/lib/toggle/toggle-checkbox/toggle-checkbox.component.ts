import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-toggle-checkbox',
  templateUrl: './toggle-checkbox.component.html',
  styleUrls: ['./toggle-checkbox.component.scss']
})
export class ToggleCheckboxComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() name: string = 'name'; 
  @Input() checked: boolean = false;
  @Input() light: boolean = false;
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<boolean>();

  faCircleXmark = faXmark;
  
  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    console.log(e.srcElement.checked)
    this.checkboxValue.emit(e.srcElement.checked);
  }

}
