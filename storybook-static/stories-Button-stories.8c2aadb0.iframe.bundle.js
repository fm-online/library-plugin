"use strict";(self.webpackChunkfm_library_plugin=self.webpackChunkfm_library_plugin||[]).push([[256],{"./projects/fm-library/src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,default:()=>Button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.primary=!1,this.size="medium",this.label="Button",this.onClick=new core.EventEmitter}get classes(){const mode=this.primary?"storybook-button--primary":"storybook-button--secondary";return["storybook-button",`storybook-button--${this.size}`,mode]}};ButtonComponent.propDecorators={primary:[{type:core.Input}],backgroundColor:[{type:core.Input}],size:[{type:core.Input}],label:[{type:core.Input}],onClick:[{type:core.Output}]},ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"storybook-button",imports:[common.CommonModule],template:' <button\n    type="button"\n    (click)="onClick.emit($event)"\n    [ngClass]="classes"\n    [ngStyle]="{ \'background-color\': backgroundColor }"\n  >\n    {{ label }}\n  </button>',styles:['.storybook-button {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}']})],ButtonComponent);const Button_stories={title:"Example/Button",component:ButtonComponent,tags:["autodocs"],render:args=>({props:Object.assign({backgroundColor:null},args)}),argTypes:{backgroundColor:{control:"color"}}},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{label:"Button"}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}}},"./node_modules/tslib/tslib.es6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gn:()=>__decorate});function __decorate(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}Object.create;Object.create}}]);