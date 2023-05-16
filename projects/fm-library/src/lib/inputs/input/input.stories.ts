// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {InputComponent} from './input.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleInfo, faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';

export default {
  title: 'inputs/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
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
            iconLibrary.addIcons();
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<InputComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: false,
    error: false,
    light: false,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: false,
    error: false,
    light: true,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

export const withInfo: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: false,
    error: false,
    light: false,
    faCircleInfo: faCircleInfo,
    errorText: 'die Fehlermeldung',
    info: 'test-info',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const withInfoDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: false,
    error: false,
    light: true,
    faCircleInfo: faCircleInfo,
    errorText: 'die Fehlermeldung',
    info: 'test-info-dark',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

export const error: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: 'falscher input',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: true,
    error: true,
    light: false,
    faCircleExclamation: faCircleExclamation,
    faCircleXmark: faCircleXmark,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const errorDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: 'falscher input',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: true,
    error: true,
    light: true,
    faCircleExclamation: faCircleExclamation,
    faCircleXmark: faCircleXmark,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

export const success: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.100,00',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: true,
    error: false,
    light: false,
    faCircleCheck: faCircleCheck,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const successDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.100,00',
    type: 'text',
    placeholder: '0,00',
    unit: '€',
    touched: true,
    error: false,
    light: true,
    faCircleCheck: faCircleCheck,
    errorText: 'die Fehlermeldung',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

