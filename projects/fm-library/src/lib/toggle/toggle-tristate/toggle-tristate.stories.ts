// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ToggleTristateComponent } from './toggle-tristate.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faHouseCircleCheck, faHouseCircleExclamation, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
// import { MainPipe } from '../../../pipes/pipe.module';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

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
      imports: [
        FontAwesomeModule, 
        // MainPipe, 
        // AngularSvgIconModule.forRoot(),
        HttpClientModule],
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
    'state': 'success',
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
