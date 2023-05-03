import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { InfoButtonComponent } from './buttons/info-button/info-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    InfoButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    InfoButtonComponent
  ]
})
export class FmLibraryModule { }
