import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  public getWidth: any;
  public getHeight: any;

  private displaySizeSmallest = 540;
  private displaySizeTablet = 1024;
  private displaySizeDesktopS = 1280;
  private displaySizeDesktopM = 1366;
  private displaySizeDesktopL = 1920;

  constructor() {
    this.getWidth = window.innerWidth;
    this.getHeight = window.innerHeight;
  }

  public updateScreenSizes() {
    this.getWidth = window.innerWidth;
    this.getHeight = window.innerHeight;
  }

  isSmallest() {
    return this.getWidth < this.displaySizeSmallest ? true : false;
  }

  isMobile() {
    return this.getWidth < this.displaySizeTablet ? true : false;
  }

  isMobileOrTablet() {
    return this.getWidth < this.displaySizeDesktopS ? true : false;
  }

  isBiggerThanFullHD() {
    return this.getWidth > this.displaySizeDesktopL ? true : false;
  }

  convertMobileFont(baseSize: string, factor: number) {
    const sizeNumber = parseInt(baseSize.substring(0, baseSize.length - 2));
    const mobileSizeNumber = sizeNumber * factor;
    return mobileSizeNumber.toString() + 'px';
  }

}
