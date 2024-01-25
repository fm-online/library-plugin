// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1

import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { RowComponent } from './row.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { TileTextComponent } from '../../text/tile-text/tile-text.component';
import { CheckboxComponent } from '../../toggle/checkbox/checkbox.component';
import { IconButtonComponent } from '../../buttons/icon-button/icon-button.component';
import { ButtonComponent } from '../../buttons/button/button.component';

function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: "../assets/content/da-texts-", suffix: ".json" },
  ]);
}

export default {
  title: 'info/RowComponent',
  component: RowComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CheckboxComponent,
        TileTextComponent,
        ButtonComponent,
        IconButtonComponent
      ],
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

type Story = StoryObj<RowComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    label: 'Test Text',
  },
};

export const withButton: Story = {
  args: {
    label: 'Test Text',
    button: true
  },
};

const icons = [{
  type: 'button1',
  icon: "assets/images/lock.svg"
},
{
  type: 'button2',
  icon: "assets/images/diskSave.svg",
  disabled: true
},
{
  type: 'button3',
  icon: "assets/images/houseUser.svg"
},
]

export const withIcons: Story = {
  args: {
    label: 'Test Text',
    icons: icons
  },
};


