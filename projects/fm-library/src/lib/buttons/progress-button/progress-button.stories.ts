// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj} from '@storybook/angular';
import {ProgressButtonComponent} from './progress-button.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}


export default {
  title: 'buttons/ProgressButtonComponent',
  component: ProgressButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule, 
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

type Story = StoryObj<ProgressButtonComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'Stellplätze',
    icon: 'assets/images/parking.svg',
    state: 'success',
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

export const Dashboard: Story = {
  args: {
    label: 'button label',
    icon: 'assets/images/barsProgress.svg',
    state: 'closed',
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

export const Ende: Story = {
  args: {
    label: 'Info',
    icon: 'assets/images/circleExclamation.svg',
    state: 'end',
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
    label: 'disabled',
    disabled: true,
    icon: 'assets/images/user.svg',
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
