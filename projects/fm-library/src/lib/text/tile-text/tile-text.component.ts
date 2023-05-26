import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-tile-text',
  templateUrl: './tile-text.component.html',
  styleUrls: ['./tile-text.component.scss']
})
export class TileTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Input() size: string = '16px';
  mobileSize: string = '19px';

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) { }

  ngOnInit(): void {
    this.mobileSize = this.screen.convertMobileFont(this.size, 1.1875);
  }

  getInfo(e: string) {
    console.log(e);
    this.infoValue.emit(e);
  }

}
