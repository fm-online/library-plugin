import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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
  @Input() inputDisabled: boolean = false;
  @Input() light: boolean = false;
  @Input() skinnyLabel: boolean = false;
  @Input() textAlign: string = 'right';
  @Input() customBackground: string | undefined;

  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
    console.log('Text align: ', this.textAlign);
  }

  getValue(e: any) {
    if (this.isCurrency) {
      const inputValue = e.srcElement.value.replaceAll('.', '').replaceAll(',', '.');
      if(isNaN(parseInt(inputValue))) {
        return;
      }
      this.value = parseInt(inputValue).toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 0 });
    }
    this.inputValue.emit([e.srcElement.value, this.name]);
  }

  removePlaceholder() {
    this.placeholder = '';
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

  textAlignIsLeft() {
    console.log('IS LEFT!');
    return this.textAlign === 'left' ? true : false;
  }

  textAlignIsCenter() {
    console.log('IS CENTER!');
    return this.textAlign === 'center' ? true : false;
  }
}
