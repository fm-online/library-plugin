// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {InputDateComponent} from './input-date.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'inputs/InputDateComponent',
  component: InputDateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(), 
        MatFormFieldModule, 
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        NgbTooltipModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<InputDateComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: false,
    placeholder: 'tt.mm.jjjj',
  },
};

export const DefaultDark: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: true,
    placeholder: 'tt.mm.jjjj',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};

export const WithInfo: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: false,
    placeholder: 'tt.mm.jjjj',
    info: 'date-info',
  },
};

export const WithInfoDark: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: true,
    placeholder: 'tt.mm.jjjj',
    info: 'date-info-dark',
  },
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
};
