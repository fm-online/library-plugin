import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() iconButton: boolean = false;
  @Input() light: boolean = false;
  @Input() type!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() icon: any;
  @Input() disabled: boolean = false;
  @Input() iconLeft: any;
  @Input() iconRight: any;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  getValue() {
    this.buttonValue.emit(this.type);
  }

}
