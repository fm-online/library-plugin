import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'lib-toggle-vertical',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './toggle-vertical.component.html',
  styleUrls: ['./toggle-vertical.component.scss']
})
export class ToggleVerticalComponent implements OnChanges, OnInit {
  @Input() name: string = 'name';
  @Input() label1: string = 'label1';
  @Input() value1: string = 'value1';
  @Input() label2: string = 'label2';
  @Input() value2: string = 'value2';
  @Input() checked1: boolean = false;
  @Input() checked2: boolean = false;
  @Input() light: boolean = false;
  @Input() localValue: string = 'localValue';

  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  
  constructor() { 
    this.getChanges();
    console.log('vertical-toggle constructor', this.localValue);
  }

  ngOnInit() {
    this.getChanges();
    console.log('vertical-toggle onInit', this.localValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getChanges()
    console.log('vertical-toggle changes', changes, this.localValue);
  }

  getChanges() {
    if(this.localValue === this.value1) {
      this.checked1 = true;
      this.checked2 = false;
    } else if (this.localValue === this.value2) {
      this.checked2 = true;
      this.checked1 = false;
    }
  }

  getValue(e: any) {
    this.localValue = e;
    this.switchValue.emit(e.srcElement.value);
  }

}
