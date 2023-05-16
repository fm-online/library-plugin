// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {InputDateComponent} from './input-date.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

export default {
  title: 'inputs/InputDateComponent',
  component: InputDateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
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
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faCircleCheck);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
        MatDatepickerModule,
        {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
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
    icon: faCircleCheck,
  },
};

export const DefaultDark: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: true,
    placeholder: 'tt.mm.jjjj',
    icon: faCircleCheck,
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
    icon: faCircleCheck,
    info: 'date-info',
  },
};

export const WithInfoDark: Story = {
  args: {
    name: 'id',
    label: 'Datum eintragen',
    light: true,
    placeholder: 'tt.mm.jjjj',
    icon: faCircleCheck,
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
