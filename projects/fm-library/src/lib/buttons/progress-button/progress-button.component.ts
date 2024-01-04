import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'lib-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})

export class ProgressButtonComponent implements OnInit{
  @Input() type!: string;
  @Input() label!: string;
  @Input() icon!: string;
  @Input() state!: string;
  @Input() disabled: boolean = false;
  @Output() public buttonValue:EventEmitter<any> = new EventEmitter<string>();
  stateIcon: string = 'assets/images/lock.svg';
  stateLabel!: string;

  constructor(
    public screen: HelperService
  ) {}

  @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.screen.updateScreenSizes();
  }

  ngOnInit() {
    if (this.state) {
      if(this.state === 'open') {
        this.stateIcon = 'assets/images/lockOpen.svg';
      }
      this.setStateLabel();
    }
  }

  getValue() {
    this.buttonValue.emit(this.type);
  }

  setStateLabel() {
    switch(this.state) {
      case 'success': this.stateLabel = 'PROGRESS.STATES.COMPLETE';
      break;
      case 'warning': this.stateLabel = 'PROGRESS.STATES.INCOMPLETE';
      break;
      case 'error': this.stateLabel = 'PROGRESS.STATES.ERROR';
      break;
      case 'open': this.stateLabel = 'PROGRESS.STATES.OPEN';
      break;
      case 'closed': this.stateLabel = 'PROGRESS.STATES.CLOSED';
      break;
      case 'info': this.stateLabel = 'PROGRESS.STATES.INFO';
      break;
      case 'end': this.stateLabel = 'PROGRESS.STATES.END';
      break;
      default: this.stateLabel = 'PROGRESS.STATES.OPTIONAL';
      break;
    }
  }

}
