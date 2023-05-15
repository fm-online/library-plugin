// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {ToggleComponent} from './toggle.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { APP_INITIALIZER } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'switches/ToggleComponent',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faCircleCheck);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<ToggleComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label1: 'Ja',
    label2: 'Nein',
    value1: 'true',
    value2: 'false',
    name: 'name',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    label1: 'Ja',
    label2: 'Nein',
    value1: 'true',
    value2: 'false',
    name: 'name',
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

