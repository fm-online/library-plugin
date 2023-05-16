import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {
  @Input() light: boolean = false;
  @Input() id: string = '';
  @Output() public infoPressed:EventEmitter<any> = new EventEmitter<boolean>();
  faCircleInfo = faCircleInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

  getInfo() {
    this.infoPressed.emit(this.id);
  }

}
