import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  typingTimer: any;
  @Input() doneTypingInterval: number = 3000;
  @Input() form: any;
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() touched: boolean = false;
  @Input() type: string = 'text';
  @Input() validationType: string = 'currency';
  @Input() unit!: string;
  @Input() info: string = '';
  @Input() infoText: string = '';
  @Input() infoHeader: string = '';
  @Input() error: boolean = false;
  @Input() errorText: string = '';
  @Input() autoWidth: boolean = false;
  @Input() isCurrency: boolean = true;
  @Input() decimals: number = 2;
  @Input() inputDisabled: boolean = false;
  @Input() light: boolean = false;
  @Input() skinnyLabel: boolean = false;
  @Input() textAlign: string = 'right';
  @Input() textColor: string = 'rgb(32, 56, 100)';
  @Input() placeholderType: string | boolean = false;
  @Input() backgroundColor: string = 'rgb(255, 255, 255)';
  @Input() borderColor: string = 'rgb(32, 56, 100)';
  defaultBoxShadowColor!: string;
  @Input() boxShadowColor: string | boolean = false;
  @Input() disableNegativeMargin: string | boolean = false;

  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();
  @ViewChild('target') target!: any;
  
  constructor() {}

  ngOnInit(): void {
    this.light
      ? this.defaultBoxShadowColor = '0 3px 5px rgba(255, 255, 255, 0.5)'
      : this.defaultBoxShadowColor = '0 3px 5px rgba(32, 56, 100, 0.5)';
  }

  getValue(e: any) {
    if (!!this.target.nativeElement.value) {
      this.typingTimer = setTimeout(() => this.doneTyping(e), this.doneTypingInterval);
    }
  }

  doneTyping(e: any) {
    this.inputValue.emit([this.getCurrency(e.srcElement.value), this.name]);
  }

  getCurrency(e: any) {
    if (this.isCurrency) {
      const inputValue = e.replaceAll('.', '').replaceAll(',', '.');
      if(isNaN(parseInt(inputValue))) {
        return;
      }
      this.value = parseFloat(inputValue).toLocaleString('de-DE', { maximumFractionDigits: this.decimals, minimumFractionDigits: this.decimals });
    } else {
      this.value = e;
    }
    return this.value
  }

  removePlaceholder() {
    this.placeholder = '';
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

  textAlignIsLeft() {
    return this.textAlign === 'left' ? true : false;
  }

  textAlignIsCenter() {
    return this.textAlign === 'center' ? true : false;
  }

  placeholderIsWhite() {
    return this.placeholderType === 'white' ? true : false;
  }

  placeholderIsBlack() {
    return this.placeholderType === 'black' ? true : false;
  }

  placeholderIsBlue() {
    return this.placeholderType === 'blue' ? true : false;
  }

  getCustomBorderColor() {
    return '1px solid ' + this.borderColor;
  }

  getCustomBoxShadowColor() {
    return '0 3px 5px ' + this.boxShadowColor;
  }
}
