import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() thin: boolean = false;
  @Input() info: string = '';
  @Input() convertMobile: boolean = false;
  @Input() infoSmall: boolean = false;
  @Input() size: string = '38px';
  mobileSize: string = '25px';
  mobileLineHeight: string = '34px';

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) {}

  @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.screen.updateScreenSizes();
  }

  ngOnInit(): void {
    this.mobileSize = this.screen.convertMobileFont(this.size, 0.658);
    this.mobileLineHeight = this.screen.convertMobileFont(this.size, 0.9);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
