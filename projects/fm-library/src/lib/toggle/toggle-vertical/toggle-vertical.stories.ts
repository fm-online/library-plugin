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

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label1: 'Ja',
    label2: 'Nein',
    value1: 'true',
    value2: 'false',
    name: 'name',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    label1: 'Ja',
    label2: 'Nein',
    value1: 'true',
    value2: 'false',
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

export const Checked: Story = {
  args: {
    label1: 'Ja',
    label2: 'Nein',
    value1: 'true',
    value2: 'false',
    name: 'name',
    localValue: 'true',
    light: false,
  },
};
