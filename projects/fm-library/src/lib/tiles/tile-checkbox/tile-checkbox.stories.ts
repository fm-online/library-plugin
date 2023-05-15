// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleXmark, faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { APP_INITIALIZER } from '@angular/core';
// import { MainPipe } from '../../../pipes/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { TileCheckboxComponent } from './tile-checkbox.component';

export default {
  title: 'tiles/TileCheckboxComponent',
  component: TileCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule, 
        // MainPipe, 
        HttpClientModule],
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

type Story = StoryObj<TileCheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'das Label',
    image: faHouseCircleXmark,
    icon: faCircleCheck,
    checked: false,
    name: 'name',
    value: 'the value',
    state: 'success',
  },
};

