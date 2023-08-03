import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() selectItems: any = [{'value': '', 'viewValue': 'bitte auswählen'}];
  @Input() icon: string = 'assets/images/circleCheck.svg';
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Input() selectedItem!: any;
  @Input() autoWidth: boolean = false;

  @Output() public selectValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  success: boolean = false;

  constructor() { }

  getValue(e: any) {
    console.log(e)
    this.success = true;
    this.selectValue.emit(e);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
