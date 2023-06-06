import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  @Input() inactive: boolean = false;
  @Input() active: boolean = false;
  @Input() type!: string;
  @Input() value!: string;
  @Input() label!: string;
  @Input() icon: any;
  @Input() disabled: boolean = false;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();

  constructor(
    public screen: HelperService
  ) {}

  @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.screen.updateScreenSizes();
  }

  getValue() {
    this.buttonValue.emit(this.type);
  }

}
