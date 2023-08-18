import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-toggle-tristate',
  templateUrl: './toggle-tristate.component.html',
  styleUrls: ['./toggle-tristate.component.scss']
})
export class ToggleTristateComponent implements OnInit {
  @Input() tabs: any;
  @Output() public switchValue:EventEmitter<any> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getValue(e: any) {
    this.switchValue.emit(e.srcElement.value);
  }

}
