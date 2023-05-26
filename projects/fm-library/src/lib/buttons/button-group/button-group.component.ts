import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: any;
  @Input() light: boolean = false;
  localValue: string = 'localValue';
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    public screen: HelperService
  ) { }

  ngOnInit(): void {
  }

  sendValue(e: any) {
    this.localValue = e;
    this.buttonValue.emit(e);
  }

}
