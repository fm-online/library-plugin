// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ToggleTristateComponent } from './toggle-tristate.component';

export default {
  title: 'switches/ToggleTristateComponent',
  component: ToggleTristateComponent,
  parameters: {
    backgrounds: {
      default: 'dunkel',
      values: [
        { name: 'dunkel', value: '#203864' },
      ],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
type Story = StoryObj<ToggleTristateComponent>;

const testTabsThree = [
  {
    'label': 'N° 1',
    'name': 'name',
    'state': 'success',
    'value': 'value1',
    'checked': true
  },
  {
    'label': 'N° 2',
    'name': 'name',
    'value': 'value2',
    'checked': false
  },
  {
    'label': 'N° 3',
    'name': 'name',
    'state': 'success',
    'value': 'value3',
    'checked': false
  }
]

const testTabsTwo = [
  {
    'label': 'N° 1',
    'name': 'name',
    'state': 'error',
    'value': 'value1',
    'checked': true
  },
  {
    'label': 'N° 2',
    'name': 'name',
    'value': 'value2',
    'checked': false
  }
]

export const Default: Story = {
  args: {
    tabs: testTabsThree
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: testTabsTwo
  },
};
