// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk} from '@fortawesome/free-regular-svg-icons';
import { APP_INITIALIZER } from '@angular/core';

export default {
  title: 'buttons/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
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

type Story = StoryObj<ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    value: 'button label',
    light: false,
  },
};

export const DefaultDark: Story = {
  args: {
    value: 'button label',
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

export const Icon: Story = {
  args: {
    label: 'Fortschritt speichern',
    iconButton: true,
    icon: faFloppyDisk,
    light: false,
  },
};

export const IconDark: Story = {
  args: {
    label: 'Fortschritt speichern',
    iconButton: true,
    icon: faFloppyDisk,
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

export const IconLeft: Story = {
  args: {
    value: 'zurück',
    iconLeft: faChevronLeft,
    light: false,
  },
};

export const IconLeftDark: Story = {
  args: {
    value: 'zurück',
    iconLeft: faChevronLeft,
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

export const IconRight: Story = {
  args: {
    value: 'weiter',
    iconRight: faChevronRight,
    light: false,
  },
};

export const IconRightDark: Story = {
  args: {
    value: 'weiter',
    iconRight: faChevronRight,
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
