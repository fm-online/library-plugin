import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faArrowDown, faArrowUp, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() selectItems!: any;
  @Input() icon = faCircleCheck;
  @Input() light: boolean = false;
  @Input() info: boolean = false;
  @Input() selectedItem!: any;
  @Output() public selectValue:EventEmitter<any> = new EventEmitter<string>();

  success: boolean = false;
  faCheck = faCircleCheck;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() { }

  ngOnInit(): void {}

  getValue(e: any) {
    console.log('change', e);
    this.success = true;
    this.selectValue.emit(e);
  }

  getInfo(e: boolean) {
    console.log(e)
  }

}
