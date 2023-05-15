// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {CounterComponent} from './counter.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';

const minus = faMinus
const plus = faPlus

export default {
  title: 'switches/CounterComponent',
  component: CounterComponent,
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

type Story = StoryObj<CounterComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    placeholder: '0',
    value: 0,
    step: 1,
    min: 0,
    max: 10,
    name: 'name',
    light: false,
  },
};

export const Dark: Story = {
  args: {
    placeholder: '0',
    value: 0,
    step: 1,
    min: 0,
    max: 10,
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
