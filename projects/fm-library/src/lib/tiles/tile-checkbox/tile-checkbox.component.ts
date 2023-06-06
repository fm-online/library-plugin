import { Component, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-tile-checkbox',
  templateUrl: './tile-checkbox.component.html',
  styleUrls: ['./tile-checkbox.component.scss']
})
export class TileCheckboxComponent {
  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() checked: boolean = false;
  @Input() value: string = 'value';
  @Input() state: string = 'state';
  @Input() image?: any;
  @Input() light: boolean = true;
  @Input() content!: TemplateRef<any>;
  @Input() isSVG: boolean = false;
  expanded!: boolean;
  faCheck = faCircleCheck;
  faAttention = faCircleExclamation;
  faError = faCircleXmark;
  screenWidth: any;
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public screen: HelperService
  ) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screen.updateScreenSizes();
  }

  getValue(e: any) {
      this.checked = e.srcElement.checked;
      const checked = e.srcElement.checked;
      const name = e.srcElement.name;
      this.checkboxValue.emit({name, checked});
  }

}
