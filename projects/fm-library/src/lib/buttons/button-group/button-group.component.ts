import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: any;
  @Input() light: boolean = false;
  localValue: string = 'localValue';
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(e: any) {
    this.localValue = e;
    this.buttonValue.emit(e);
  }

}
