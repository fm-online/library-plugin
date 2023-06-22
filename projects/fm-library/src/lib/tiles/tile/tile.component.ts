import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
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
  @Input() image?: string;
  @Input() light: boolean = true;
  @Input() content!: TemplateRef<any>;
  expanded!: boolean;

  @Output() public checkboxValue: EventEmitter<any> = new EventEmitter<boolean>();

  constructor(
    public screen: HelperService
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screen.updateScreenSizes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['localValue']) {
      this.expanded = this.localValue !== this.value ? false : true;
    }
  }

  getValue(e: any) {
    this.checkboxValue.emit(e.srcElement.value);
  }

}