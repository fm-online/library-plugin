// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {TileCheckboxGroupComponent} from './tile-checkbox-group.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TileCheckboxComponent } from '../tile-checkbox/tile-checkbox.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}


export default {
  title: 'tiles/TileCheckboxGroupComponent',
  component: TileCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TileCheckboxComponent,
      ],
      imports: [
        AngularSvgIconModule.forRoot(),
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
type Story = StoryObj<TileCheckboxGroupComponent>;

const testTiles = [
  {
    'label': 'label1',
    'name': 'name',
    'state': 'success',
    'checked': false,
    'image': 'assets/images/houseCheckmark.svg',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'name': 'name',
    'state': 'warning',
    'checked': false,
    'image': 'assets/images/houseFlag.svg',
    'value': 'value2'
  },
  {
    'label': 'label3',
    'name': 'name',
    'state': 'error',
    'checked': false,
    'image': 'assets/images/houseTree.svg',
    'value': 'value3'
  }
]

export const Default: Story = {
  args: {
    tiles: testTiles
  },
};
