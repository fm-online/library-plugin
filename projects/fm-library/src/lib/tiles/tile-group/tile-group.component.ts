import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tile-group',
  templateUrl: './tile-group.component.html',
  styleUrls: ['./tile-group.component.scss']
})
export class TileGroupComponent implements OnInit {
  @Input() tiles: any;
  @Input() localValue: string = 'localValue';
  @Output() public tileValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(e: any) {
    this.localValue = e;
    this.tileValue.emit(e);
  }

}
