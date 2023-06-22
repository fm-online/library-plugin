// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TileCheckboxComponent } from './tile-checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'tiles/TileCheckboxComponent',
  component: TileCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule, 
        HttpClientModule,
        AngularSvgIconModule.forRoot()
      ],
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

