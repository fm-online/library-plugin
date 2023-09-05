// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {ToggleVerticalComponent} from './toggle-vertical.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'switches/ToggleVerticalComponent',
  component: ToggleVerticalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<ToggleVerticalComponent>;

const testOptions2 = [
  {
    'label': 'label1',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'value': 'value2'
  }
]

const testOptions3 = [
  {
    'label': 'label1',
    'value': 'value1'
  },
  {
    'label': 'Grundstück wird für das Neubauvorhaben verwendet',
    'value': 'value2'
  }
]

const testOptions5 = [
  {
    'label': 'label1',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'value': 'value2'
  },
  {
    'label': 'label3',
    'value': 'value3'
  },
  {
    'label': 'label4',
    'value': 'value4'
  },
  {
    'label': 'label5',
    'value': 'value5'
  }
]

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    options: testOptions2,
    localValue: '',
    name: 'name',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    options: testOptions2,
    localValue: '',
    name: 'name',
    light: true,
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

export const FiveOptions: Story = {
  args: {
    options: testOptions5,
    localValue: '',
    name: 'name',
    light: false,
  },
};

export const disabled: Story = {
  args: {
    options: testOptions2,
    localValue: 'value2',
    inputDisabled: true,
    name: 'name',
    light: false,
  },
};

export const multiLine: Story = {
  args: {
    options: testOptions3,
    multiLine: true,
    name: 'name',
    light: false,
  },
};
