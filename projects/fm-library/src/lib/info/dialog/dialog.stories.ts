// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {DialogComponent} from './dialog.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}

export default {
  title: 'info/DialogComponent',
  component: DialogComponent,
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

type Story = StoryObj<DialogComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
  },
};

export const DefaultDark: Story = {
  args: {
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
