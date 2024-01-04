// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import {HeaderTextComponent} from './header-text.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'text/HeaderTextComponent',
  component: HeaderTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(), 
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<HeaderTextComponent>;

export const Default: Story = {
  args: {
    label: 'die Headline',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    label: 'die Headline',
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

export const WithInfo: Story = {
  args: {
    label: 'die Headline',
    light: false,
    info: 'text-info',
  },
};

export const WithInfoDark: Story = {
  args: {
    label: 'die Headline',
    light: true,
    info: 'text-info-dark',
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

export const WithInfoSmall: Story = {
  args: {
    label: 'die Headline',
    light: false,
    info: 'text-info',
    infoSmall: true
  },
};


