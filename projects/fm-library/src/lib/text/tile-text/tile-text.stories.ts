// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { APP_INITIALIZER } from '@angular/core';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import {TileTextComponent} from './tile-text.component';

export default {
  title: 'text/TileTextComponent',
  component: TileTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
      ],
      declarations: [
        InfoButtonComponent,
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


