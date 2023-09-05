// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {InputButtonComponent} from './input-button.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';

export default {
  title: 'inputs/InputButtonComponent',
  component: InputButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(), 
        NgbTooltipModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<InputButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: true,
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
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: false,
    info: 'test-info',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const withInfoDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: true,
    light: true,
    info: 'test-info',
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

export const warning: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: false,
    light: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const warningDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '1.200,00',
    unit: '€',
    touched: false,
    light: true,
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

export const short: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '90',
    unit: '%',
    touched: true,
    short: true,
    light: false,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const shortDark: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: '90',
    unit: '%',
    touched: true,
    short: true,
    light: true,
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

export const noValue: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    touched: false,
    light: false,
  },
};

export const disabled: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: 'the value',
    touched: true,
    inputDisabled: true,
    light: false,
  },
};

