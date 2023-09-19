// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'buttons/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
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
export const Disabled: Story = {
  args: {
    value: 'disabled button',
    disabled: true,
    light: false,
  },
};

export const DisabledDark: Story = {
  args: {
    value: 'disabled button',
    disabled: true,
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
    icon: 'assets/images/diskSave.svg',
    light: false,
  },
};

export const IconDark: Story = {
  args: {
    label: 'Fortschritt speichern',
    iconButton: true,
    icon: 'assets/images/diskSave.svg',
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
    iconLeft: 'assets/images/chevronLeft.svg',
    light: false,
  },
};

export const IconLeftDark: Story = {
  args: {
    value: 'zurück',
    iconLeft: 'assets/images/chevronLeft.svg',
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
    iconRight: 'assets/images/chevronRight.svg',
    light: false,
  },
};

export const IconRightDark: Story = {
  args: {
    value: 'weiter',
    iconRight: 'assets/images/chevronRight.svg',
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

export const customWidth: Story = {
  args: {
    value: 'weiter',
    width: '200',
    iconRight: 'assets/images/chevronRight.svg',
    light: false,
  },
};
