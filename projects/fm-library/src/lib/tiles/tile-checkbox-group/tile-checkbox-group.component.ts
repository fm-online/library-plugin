import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-tile-checkbox-group',
  templateUrl: './tile-checkbox-group.component.html',
  styleUrls: ['./tile-checkbox-group.component.scss']
})
export class TileCheckboxGroupComponent {
  @Input() tiles: any;
  @Input() withIndex!: boolean;
  @Output() public tileValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    public screen: HelperService
  ) { }

  sendValue(e: any) {
    this.tileValue.emit(e);
  }
}
