// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, StoryObj } from '@storybook/angular';
import {TileTextComponent} from './tile-text.component';

export default {
  title: 'text/TileTextComponent',
  component: TileTextComponent,
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


