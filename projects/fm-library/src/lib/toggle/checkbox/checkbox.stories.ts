// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {CheckboxComponent} from './checkbox.component';

export default {
  title: 'switches/CheckboxComponent',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<CheckboxComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    // label: 'das Label',
    // checked: true,
    // light: false,
    // dynLabelClassName: 'dynamic-class'
  },
};

export const Dark: Story = {
  args: {
    // label: 'das Label',
    // checked: true,
    // light: true,
    // dynLabelClassName: 'dynamic-class'
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
