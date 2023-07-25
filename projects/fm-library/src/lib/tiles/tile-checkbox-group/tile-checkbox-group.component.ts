import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-tile-checkbox-group',
  templateUrl: './tile-checkbox-group.component.html',
  styleUrls: ['./tile-checkbox-group.component.scss']
})
export class TileCheckboxGroupComponent {
  @Input() tiles: any;
  @Input() withIndex!: boolean;
  @Output() public tileValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  sendValue(e: any) {
    this.tileValue.emit(e);
  }
}
