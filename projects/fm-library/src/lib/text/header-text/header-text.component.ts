import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() light: boolean = false;
  @Input() info: string = '';
  @Input() size: string = '38px';
  mobileSize: string = '25px';

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) {}

  ngOnInit(): void {
    this.mobileSize = this.screen.convertMobileFont(this.size, 0.658);
  }

  getInfo(e: string) {
    this.infoValue.emit(e);
  }

}
