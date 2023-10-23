// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TileCheckboxComponent } from './tile-checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}

export default {
  title: 'tiles/TileCheckboxComponent',
  component: TileCheckboxComponent,
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

type Story = StoryObj<TileCheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'das Label',
    image: 'assets/images/signal-bars-poor.svg',
    checked: false,
    name: 'name',
    value: 'the value',
    state: 'success',
  },
};

