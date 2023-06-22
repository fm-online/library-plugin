import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() label!: string;
  @Input() selectItems!: any;
  @Input() icon: string = 'assets/images/circleCheck.svg';
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Input() selectedItem!: any;

  @Output() public selectValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  success: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  getValue(e: any) {
    this.success = true;
    this.selectValue.emit(e);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
