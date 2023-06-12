// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {ProgressButtonComponent} from './progress-button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBarsProgress, faSquareParking, faCircleExclamation, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'buttons/ProgressButtonComponent',
  component: ProgressButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        BrowserAnimationsModule, 
        HttpClientModule,
        AngularSvgIconModule.forRoot()
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

type Story = StoryObj<ProgressButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'Stellplätze',
    icon: faSquareParking,
    state: 'success',
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

export const Dashboard: Story = {
  args: {
    label: 'button label',
    icon: faBarsProgress,
    state: 'closed',
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

export const SVG: Story = {
  args: {
    label: 'SVG Button',
    svg: 'assets/images/signal-bars-poor.svg',
    state: 'warning',
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

export const Ende: Story = {
  args: {
    label: 'Info',
    icon: faCircleExclamation,
    state: 'end',
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
    label: 'disabled',
    disabled: true,
    icon: faUser,
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
