// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ToggleTristateComponent } from './toggle-tristate.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { HttpBackend, HttpClientModule } from '@angular/common/http';

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}

export default {
  title: 'switches/ToggleTristateComponent',
  component: ToggleTristateComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ToggleTristateComponent,
      ],
      imports: [
        HttpClientModule,
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
