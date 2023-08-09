// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {StateIconComponent} from './state-icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'icons/StateIconComponent',
  component: StateIconComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<StateIconComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Success: Story = {
  args: {
    state: 'success',
  },
};

export const Warning: Story = {
  args: {
    state: 'warning',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
  },
};
