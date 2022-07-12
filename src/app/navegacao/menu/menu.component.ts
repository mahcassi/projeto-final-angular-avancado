import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponet {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }
}
