import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() value: any = '';
  @Input() placeholder: string = '';
  @Input() multiLine: boolean = false;
  @Input() info: string = '';
  @Input() infoText: string = '';
  @Input() infoHeader: string = '';
  @Input() autoWidth: boolean = false;
  @Input() inputDisabled: boolean = false;
  @Input() light: boolean = false;
  @Output() public inputValue:EventEmitter<any> = new EventEmitter<string>();
  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    this.inputValue.emit([e.srcElement.innerHTML, this.name]);
  }

  removePlaceholder() {
    this.placeholder = '';
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
