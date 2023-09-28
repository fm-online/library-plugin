import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-toggle-horizontal',
  templateUrl: './toggle-horizontal.component.html',
  styleUrls: ['./toggle-horizontal.component.scss']
})
export class ToggleHorizontalComponent implements AfterViewInit {

  @Input() name: string = 'name';
  @Input() label?: string;
  @Input() options: any;
  @Input() light: boolean = false;
  @Input() localValue: string = 'localValue';
  @Input() toggleWidth: string = 'auto';
  @Input() elementWidth: string = 'auto';

  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  @ViewChild('toggleContainer') toggleContainer!: ElementRef<any>;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.toggleContainer.nativeElement.offsetWidth);
    if (this.toggleWidthAuto()) {
      this.toggleWidth = this.toggleContainer.nativeElement.offsetWidth + 'px';
      this.elementWidth = (+this.toggleContainer.nativeElement.offsetWidth / this.getElementAmount()).toString() + 'px';
    } else if (this.isAuto(this.toggleWidth)) {
      this.toggleWidth = this.getToggleWidthWithElementWidth();
    } else if (this.isAuto(this.elementWidth)) {
      this.elementWidth = this.getElementWidthWithToggleWidth();
    }
  }

  getCheckedOption(value: string) {
    return this.localValue === value;
  }

  sendValue(e: any) {
    this.localValue = e;
    this.switchValue.emit(e.srcElement.value);
  }

  toggleWidthAuto() {
    return this.isAuto(this.toggleWidth) && this.isAuto(this.elementWidth) ? true : false;
  }

  isAuto(value: string) {
    return value === 'auto' ? true : false;
  }

  getElementAmount() {
    return this.options.length;
  }

  getElementWidthWithToggleWidth() {
    let widthNumber = this.toggleWidth.replace(/[^0-9]/g, '');
    let widthType = this.toggleWidth.replace(widthNumber, '');
    return (+widthNumber / this.getElementAmount()).toString() + widthType;
  }

  getToggleWidthWithElementWidth() {
    let widthNumber = this.elementWidth.replace(/[^0-9]/g, '');
    let widthType = this.elementWidth.replace(widthNumber, '');
    return (+widthNumber * this.getElementAmount()).toString() + widthType;
  }
}
