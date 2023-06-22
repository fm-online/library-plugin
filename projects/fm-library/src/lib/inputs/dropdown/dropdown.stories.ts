// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {DropdownComponent} from './dropdown.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'inputs/DropdownComponent',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        MatSelectModule,
        BrowserAnimationsModule,
        NgbTooltipModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<DropdownComponent>;

const testItems = [
  {
    'value': 'value1',
    'viewValue': 'Option 1'
  },
  {
    'value': 'value2',
    'viewValue': 'Option 2'
  },
  {
    'value': 'value3',
    'viewValue': 'Option 3'
  },
  {
    'value': 'value4',
    'viewValue': 'Option 4'
  },
  {
    'value': 'value5',
    'viewValue': 'Option 5'
  },
  {
    'value': 'value6',
    'viewValue': 'Option 6'
  }
]

const placeholderTest = {
    'value': 'value0',
    'viewValue': 'Placeholder'
  }

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    name: 'id',
    label: 'das Label',
    light: false,
    icon: 'assets/images/circleCheck.svg',
    selectedItem: placeholderTest,
    selectItems: testItems,
  },
};

export const DefaultDark: Story = {
  args: {
    name: 'id',
    label: 'das Label',
    light: true,
    icon: 'assets/images/circleCheck.svg',
    selectItems: testItems,
    selectedItem: placeholderTest,
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
    name: 'id',
    label: 'das Label',
    light: false,
    icon: 'assets/images/circleCheck.svg',
    selectItems: testItems,
    selectedItem: placeholderTest,
    info: 'dropdown-info',
  },
};

export const WithInfoDark: Story = {
  args: {
    name: 'id',
    label: 'das Label',
    light: true,
    icon: 'assets/images/circleCheck.svg',
    selectItems: testItems,
    selectedItem: placeholderTest,
    info: 'dropdown-info-dark',
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
