// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { APP_INITIALIZER } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {ToggleCheckboxComponent} from './toggle-checkbox.component';

export default {
  title: 'switches/ToggleCheckboxComponent',
  component: ToggleCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faXmark);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<ToggleCheckboxComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'das Label',
    checked: true,
    light: false
  },
};

export const Dark: Story = {
  args: {
    label: 'das Label',
    checked: true,
    light: true
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
