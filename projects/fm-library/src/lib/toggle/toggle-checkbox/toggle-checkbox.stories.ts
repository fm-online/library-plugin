// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {ToggleCheckboxComponent} from './toggle-checkbox.component';

export default {
  title: 'switches/ToggleCheckboxComponent',
  component: ToggleCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<ToggleCheckboxComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'das Label',
    checked: true,
    light: false
  },
};

export const Dark: Story = {
  args: {
    label: 'das Label',
    checked: true,
    light: true
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
