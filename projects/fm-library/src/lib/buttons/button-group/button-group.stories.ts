// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {ButtonGroupComponent} from './button-group.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk} from '@fortawesome/free-regular-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../button/button.component';

export default {
  title: 'buttons/ButtonGroupComponent',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ButtonComponent,
      ],
      imports: [
        FontAwesomeModule,  
        HttpClientModule],
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

type Story = StoryObj<ButtonGroupComponent>;

const testButtons = [
  {
    'iconLeft': faChevronLeft,
    'value': 'zurück',
    'type': 'back'
  },
  {
    'label': 'Fortschritt speichern',
    'iconButton': true,
    'icon': faFloppyDisk,
    'type': 'save',
  },
  {
    'iconRight': faChevronRight,
    'value': 'weiter',
    'type': 'next'
  }
]

export const Default: Story = {
  args: {
    buttons: testButtons,
    light: false,
  },
};

export const DefaultDark: Story = {
  args: {
    buttons: testButtons,
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
