// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {ToggleHorizontalComponent} from './toggle-horizontal.component';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}

export default {
  title: 'switches/ToggleHorizontalComponent',
  component: ToggleHorizontalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        TranslateModule.forRoot({
          defaultLanguage: 'de-DE',
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpBackend]
          },
      })],
    }),
  ],
} as Meta;

type Story = StoryObj<ToggleHorizontalComponent>;

const testOptions3 = [
  {
    'label': 'label1',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'value': 'value2'
  },
  {
    'label': 'label3',
    'value': 'value3'
  }
]

const testOptions5 = [
  {
    'label': 'label1',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'value': 'value2'
  },
  {
    'label': 'label3',
    'value': 'value3'
  },
  {
    'label': 'label4',
    'value': 'value4'
  },
  {
    'label': 'label5',
    'value': 'value5'
  }
]

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    options: testOptions3,
    localValue: '',
    name: 'name',
    light: false,
    toggleWidth: '500px',
  },
};

export const Dark: Story = {
  args: {
    options: testOptions3,
    localValue: '',
    name: 'name',
    light: true,
    elementWidth: '100px',
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

export const FiveOptions: Story = {
  args: {
    options: testOptions5,
    localValue: '',
    name: 'name',
    light: false,
    elementWidth: '100px',
  },
};
