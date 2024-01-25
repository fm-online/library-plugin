// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {IconButtonComponent} from './icon-button.component';
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
  title: 'buttons/IconButtonComponent',
  component: IconButtonComponent,
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

type Story = StoryObj<IconButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    type: 'default button',
    icon: 'assets/images/lock.svg'
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

export const Disabled: Story = {
  args: {
    type: 'disabled button',
    buttonDisabled: true,
    icon: 'assets/images/lock.svg'
  },
  parameters: {
    backgrounds: {
      default: 'header',
      values: [
        { name: 'header', value: '#DDE7EE' },
      ],
    },
  },
};

