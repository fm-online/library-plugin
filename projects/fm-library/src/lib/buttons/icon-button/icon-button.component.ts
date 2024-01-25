import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() type: string = 'test';
  @Input() icon: string = '';
  @Input() buttonDisabled: boolean = false;
  @Output() public iconButtonValue:EventEmitter<any> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  setValue(e: string) {
    this.iconButtonValue.emit(e);
  }

}
