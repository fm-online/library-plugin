import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tile-checkbox-group',
  templateUrl: './tile-checkbox-group.component.html',
  styleUrls: ['./tile-checkbox-group.component.scss']
})
export class TileCheckboxGroupComponent implements OnInit {
  @Input() tiles: any;
  @Output() public tileValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendValue(e: any) {
    this.tileValue.emit(e);
  }
}
