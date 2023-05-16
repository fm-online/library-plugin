// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { APP_INITIALIZER } from '@angular/core';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import {HeaderTextComponent} from './header-text.component';

export default {
  title: 'text/HeaderTextComponent',
  component: HeaderTextComponent,
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


