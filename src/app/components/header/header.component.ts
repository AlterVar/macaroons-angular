import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  phone = '375(29)3689868';

  public open(item: HTMLElement): void {
    item.classList.add('open');
  }

  public close(item: HTMLElement) {
    item.classList.remove('open');
  }

}
