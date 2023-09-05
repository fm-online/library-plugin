import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {

  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() type: string = 'nebenkosten';
  @Input() value!: string;
  @Input() icon: string = 'assets/images/bullseyePointer.svg';
  @Input() touched: boolean = false;
  @Input() short: boolean = false;
  @Input() unit!: string;
  @Input() info: string = '';
  @Input() inputDisabled: boolean = false;
  @Input() infoText: string = 'info text';
  @Input() infoHeader: string = 'info header';
  @Input() light: boolean = false;

  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
  }

  getValue() {
    this.inputValue.emit(this.type);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
