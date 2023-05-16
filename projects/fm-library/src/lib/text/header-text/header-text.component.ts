import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() public infoValue:EventEmitter<any> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getInfo(e: string) {
    console.log(e);
    this.infoValue.emit(e);
  }

}
