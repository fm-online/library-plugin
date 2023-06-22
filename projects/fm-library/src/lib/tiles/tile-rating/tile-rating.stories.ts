// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { StarRatingModule } from 'angular-star-rating';
import { HttpClientModule } from '@angular/common/http';
import { TileRatingComponent } from './tile-rating.component';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

export default {
  title: 'tiles/TileRatingComponent',
  component: TileRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StarRatingModule.forRoot(),
        AngularSvgIconModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<TileRatingComponent>;

export const Default4Stars: Story = {
  args: {
    label: 'das Label',
    name: 'name',
    stars: 4,
    info: 'rating-info',
  },
};
export const Default5Stars: Story = {
  args: {
    label: 'das Label',
    name: 'name',
    stars: 5,
    info: 'info-rating-dark',
  },
};
