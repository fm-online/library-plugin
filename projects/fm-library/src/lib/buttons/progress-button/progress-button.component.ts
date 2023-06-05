import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBarsProgress, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})

export class ProgressButtonComponent implements OnInit{
  @Input() type!: string;
  @Input() label!: string;
  @Input() icon: any;
  @Input() state!: string;
  @Input() iconColor!: string;
  @Input() disabled: boolean = false;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();
  stateIcon: any = faLock;
  stateLabel!: string;

  constructor(
    public screen: HelperService
  ) {}

  ngOnInit() {
    if (this.state) {
      if(this.state === 'open') {
        this.stateIcon = faLockOpen;
      }
      this.setStateLabel();
    }
  }

  getValue() {
    this.buttonValue.emit(this.type);
  }

  setStateLabel() {
    switch(this.state) {
      case 'success': this.stateLabel = 'vollständig';
      break;
      case 'warning': this.stateLabel = 'unvollständig';
      break;
      case 'error': this.stateLabel = 'fehlerhaft';
      break;
      case 'open': this.stateLabel = 'freigeschaltet';
      break;
      case 'closed': this.stateLabel = 'noch nicht freigeschaltet';
      break;
      case 'info': this.stateLabel = 'Zwischenstand erreicht';
      break;
      case 'end': this.stateLabel = 'Angebot nicht möglich';
      break;
      default: this.stateLabel = 'optional';
      break;
    }
  }

}
