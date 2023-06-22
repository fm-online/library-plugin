// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {HeaderButtonComponent} from './header-button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'buttons/HeaderButtonComponent',
  component: HeaderButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<HeaderButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    value: 'button label',
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 'disabled button',
    disabled: true,
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

export const Inactive: Story = {
  args: {
    value: 'inactive button',
    inactive: true,
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

export const Active: Story = {
  args: {
    value: 'active button',
    active: true,
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

export const Icon: Story = {
  args: {
    icon: 'assets/images/user.svg',
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

