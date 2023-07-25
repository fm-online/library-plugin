import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.scss']
})
export class TileGroupComponent {
  @Input() tiles: any;
  @Input() localValue: string = 'localValue';
  @Input() withIndex!: boolean;
  @Output() public tileValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  sendValue(e: any) {
    this.localValue = e;
    this.tileValue.emit(e);
  }

}
