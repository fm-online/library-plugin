import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-tile-checkbox',
  templateUrl: './tile-checkbox.component.html',
  styleUrls: ['./tile-checkbox.component.scss']
})
export class TileCheckboxComponent implements OnInit {
  @Input() label: string = 'label';
  @Input() name: string = 'name';
  @Input() checked: boolean = false;
  @Input() value: string = 'value';
  @Input() state: string = 'state';
  @Input() image: any;
  @Input() icon: any;
  @Input() light: boolean = true;
  @Input() content!: TemplateRef<any>;
  expanded!: boolean;
  localImage: any;
  faCheck = faCircleCheck;
  faAttention = faCircleExclamation;
  faError = faCircleXmark;
  @Output() public checkboxValue:EventEmitter<any> = new EventEmitter<any>();

  constructor(private sanitizer: DomSanitizer) { this.localImage = this.sanitizer.bypassSecurityTrustHtml(this.image) }

  ngOnInit(): void {
  }

  getValue(e: any) {
      this.checked = e.srcElement.checked;
      const checked = e.srcElement.checked;
      const name = e.srcElement.name;
      this.checkboxValue.emit({name, checked});
  }

}
