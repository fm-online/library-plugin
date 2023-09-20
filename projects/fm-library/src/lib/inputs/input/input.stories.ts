// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {InputComponent} from './input.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'inputs/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        NgbTooltipModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<InputComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    name: 'id',
    textAlign: 'left',
    skinnyLabel: true,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(32, 56, 100)',
    boxShadowColor: 'rgba(32, 56, 100, 0.5)',
    textColor: 'red',
    placeholderType: 'dark'
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
    textAlign: 'left',
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

export const disabled: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: 'ganz langer Text, zum Beispiel Anschlussfinanzierung',
    type: 'text',
    inputDisabled: true,
  },
};

