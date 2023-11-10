// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {TileGroupComponent} from './tile-group.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TileComponent } from '../tile/tile.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { HeaderTextComponent } from '../../text/header-text/header-text.component';

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    {prefix: "../assets/content/da-texts-", suffix: ".json"},
  ]);
}

export default {
  title: 'tiles/TileGroupComponent',
  component: TileGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TileComponent,
        HeaderTextComponent

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

type Story = StoryObj<TileGroupComponent>;

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

const testTilesDark = [
  {
    'label': 'label1',
    'name': 'name',
    'state': 'success',
    'checked': false,
    'image': 'assets/images/houseCheckmark.svg',
    'value': 'value1',
    'dark': true,
  },
  {
    'label': 'label2',
    'name': 'name',
    'state': 'warning',
    'checked': false,
    'image': 'assets/images/houseFlag.svg',
    'value': 'value2',
    'dark': true,
  },
  {
    'label': 'label3',
    'name': 'name',
    'state': 'error',
    'checked': false,
    'image': 'assets/images/houseTree.svg',
    'value': 'value3',
    'dark': true,
  }
]

const testTilesEP = [
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
    'isEP': true,
    'image': 'assets/images/houseFlag.svg',
    'value': 'value2'
  }
]

export const Default: Story = {
  args: {
    tiles: testTiles
  },
};

export const Dark: Story = {
  args: {
    tiles: testTilesDark
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

export const WithEPLogo: Story = {
  args: {
    tiles: testTilesEP
  },
};
