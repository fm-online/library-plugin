import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-tile-text',
  templateUrl: './tile-text.component.html',
  styleUrls: ['./tile-text.component.scss']
})
export class TileTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() thin: boolean = false;
  @Input() info: string = '';
  @Input() convertMobile: boolean = false;
  @Input() infoSmall: boolean = false;
  @Input() size: string = '16px';
  mobileSize: string = '14px';

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screen.updateScreenSizes();
  }

  ngOnInit(): void {
    this.mobileSize = this.screen.convertMobileFont(this.size, 0.875);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
