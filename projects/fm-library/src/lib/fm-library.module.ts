import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'angular-star-rating';

import { ButtonComponent } from './buttons/button/button.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { InfoButtonComponent } from './buttons/info-button/info-button.component';
import { CounterComponent } from './counter/counter.component';
import { DropdownComponent } from './inputs/dropdown/dropdown.component';
import { InputComponent } from './inputs/input/input.component';
import { InputButtonComponent } from './inputs/input-button/input-button.component';
import { InputDateComponent } from './inputs/input-date/input-date.component';
import { TileComponent } from './tiles/tile/tile.component';
import { TileCheckboxComponent } from './tiles/tile-checkbox/tile-checkbox.component';
import { TileCheckboxGroupComponent } from './tiles/tile-checkbox-group/tile-checkbox-group.component';
import { TileGroupComponent } from './tiles/tile-group/tile-group.component';
import { TileRatingComponent } from './tiles/tile-rating/tile-rating.component';
import { ToggleComponent } from './toggle/toggle/toggle.component';
import { ToggleCheckboxComponent } from './toggle/toggle-checkbox/toggle-checkbox.component';
import { ToggleTristateComponent } from './toggle/toggle-tristate/toggle-tristate.component';
import { TileTextComponent } from './text/tile-text/tile-text.component';
import { HeaderTextComponent } from './text/header-text/header-text.component';
@NgModule({
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    InfoButtonComponent,
    CounterComponent,
    DropdownComponent,
    InputComponent,
    InputButtonComponent,
    InputDateComponent,
    TileComponent,
    TileCheckboxComponent,
    TileCheckboxGroupComponent,
    TileGroupComponent,
    TileRatingComponent,
    ToggleComponent,
    ToggleCheckboxComponent,
    ToggleTristateComponent,
    TileTextComponent,
    HeaderTextComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgbTooltipModule,
    StarRatingModule.forRoot(),
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    InfoButtonComponent,
    CounterComponent,
    DropdownComponent,
    InputComponent,
    InputButtonComponent,
    InputDateComponent,
    TileComponent,
    TileCheckboxComponent,
    TileCheckboxGroupComponent,
    TileGroupComponent,
    TileRatingComponent,
    ToggleComponent,
    ToggleCheckboxComponent,
    ToggleTristateComponent,
    TileTextComponent,
    HeaderTextComponent,
  ]
})
export class FmLibraryModule { }
