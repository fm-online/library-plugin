// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {CounterComponent} from './counter.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'switches/CounterComponent',
  component: CounterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<CounterComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    placeholder: '0',
    value: 0,
    step: 1,
    min: 0,
    max: 10,
    name: 'name',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    placeholder: '0',
    value: 0,
    step: 1,
    min: 0,
    max: 10,
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
