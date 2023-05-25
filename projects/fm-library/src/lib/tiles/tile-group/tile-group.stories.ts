// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {TileGroupComponent} from './tile-group.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faHouseCircleCheck, faHouseCircleExclamation, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
// import { MainPipe } from '../../../pipes/pipe.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from '../tile/tile.component';

export default {
  title: 'tiles/TileGroupComponent',
  component: TileGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TileComponent,
      ],
      imports: [
        FontAwesomeModule, 
        // MainPipe, 
        AngularSvgIconModule.forRoot(),
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

type Story = StoryObj<TileGroupComponent>;

const testTiles = [
  {
    'label': 'label1',
    'name': 'name',
    'state': 'success',
    'checked': false,
    'image': faHouseCircleCheck,
    'value': 'value1'
  },
  {
    'label': 'label2',
    'name': 'name',
    'state': 'warning',
    'checked': false,
    'image': faHouseCircleExclamation,
    'value': 'value2'
  },
  {
    'label': 'label3',
    'name': 'name',
    'state': 'error',
    'checked': false,
    'image': faHouseCircleXmark,
    'value': 'value3'
  }
]

const testTilesSVG = [
  {
    'label': 'label1',
    'name': 'name',
    'state': 'success',
    'checked': false,
    'isSVG': true,
    'image': 'assets/images/signal-bars-poor.svg',
    'value': 'value1'
  },
  {
    'label': 'label2',
    'name': 'name',
    'state': 'warning',
    'checked': false,
    'image': faHouseCircleExclamation,
    'value': 'value2'
  },
  {
    'label': 'label3',
    'name': 'name',
    'state': 'error',
    'checked': false,
    'image': faHouseCircleXmark,
    'value': 'value3'
  }
]

export const Default: Story = {
  args: {
    tiles: testTiles
  },
};

export const WithSVG: Story = {
  args: {
    tiles: testTilesSVG
  },
};
