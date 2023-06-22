// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import {TileTextComponent} from './tile-text.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'text/TileTextComponent',
  component: TileTextComponent,
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

type Story = StoryObj<TileTextComponent>;

export const Default: Story = {
  args: {
    label: 'der Text',
    light: false,
    size: '16px',
  },
};

export const Dark: Story = {
  args: {
    label: 'der Text',
    light: true,
    size: '16px',
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
    label: 'der Text',
    light: false,
    info: 'text-info',
    size: '16px',
  },
};

export const WithInfoDark: Story = {
  args: {
    label: 'der Text',
    light: true,
    info: 'text-info-dark',
    size: '16px',
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


