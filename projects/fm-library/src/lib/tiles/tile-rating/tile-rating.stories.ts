// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { StarRatingModule } from 'angular-star-rating';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, fas } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
// import { MainPipe } from '../../../pipes/pipe.module';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileRatingComponent } from './tile-rating.component';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';

export default {
  title: 'tiles/TileRatingComponent',
  component: TileRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        // MainPipe, 
        StarRatingModule.forRoot(),
        // AngularSvgIconModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons();
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<TileRatingComponent>;

export const Default4Stars: Story = {
  args: {
    label: 'das Label',
    name: 'name',
    icon: faCircleCheck,
    stars: 4,
    info: true,
  },
};
export const Default5Stars: Story = {
  args: {
    label: 'das Label',
    name: 'name',
    icon: faCircleCheck,
    stars: 5,
    info: true,
  },
};

export const WithAnImage: Story = {
  render: () => ({
    props: {
      src: '/image.png',
      alt: 'my image',
    },
  }),
};
