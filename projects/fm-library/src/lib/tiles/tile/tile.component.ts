import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnChanges {
  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() checked: boolean = false;
  @Input() value: string = 'value';
  @Input() localValue: string = 'localValue';
  @Input() state: string = 'state';
  @Input() image?: any;
  @Input() light: boolean = true;
  @Input() content!: TemplateRef<any>;
  expanded!: boolean;
  localImage: any;
  faCheck = faCircleCheck;
  faAttention = faCircleExclamation;
  faError = faCircleXmark;

  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<boolean>();

  constructor(
      private sanitizer: DomSanitizer,
      public screen: HelperService
    ) { 
      this.localImage = this.sanitizer.bypassSecurityTrustHtml(this.image) 
    }


  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes['localValue']) {
      this.expanded = this.localValue !== this.value ? false : true;
    }
  }

  getValue(e: any) {
    this.checkboxValue.emit(e.srcElement.value);
  }

}