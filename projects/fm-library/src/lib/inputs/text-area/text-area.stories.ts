// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoButtonComponent } from '../../buttons/info-button/info-button.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './text-area.component';

export default {
  title: 'inputs/TextAreaComponent',
  component: TextAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        NgbTooltipModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        InfoButtonComponent,
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<TextAreaComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Default: Story = {
  args: {
    value: '',
    placeholder: 'placeholder text',
    label: 'label'
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'das Label',
    value: '',
    light: true,
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

export const withInfo: Story = {
  args: {
    label: 'das Label',
    light: false,
    value: 'Input kann auch <a href="#">links</a.',
    info: 'test-info',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
  },
};

export const withInfoDark: Story = {
  args: {
    label: 'das Label',
    value: '',
    light: true,
    info: 'test-info-dark',
    infoText: 'info Text',
    infoHeader: 'info Überschrift',
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

export const disabled: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    value: 'der Text',
    inputDisabled: true,
  },
};

export const multipleRows: Story = {
  args: {
    label: 'das Label',
    name: 'id',
    multiLine: true,
    value: 'ganz langer Text, <br> zum Beispiel Anschlussfinanzierung. Kann auch <a href="#">links</a> enthalten.',
    inputDisabled: true,
  },
};

