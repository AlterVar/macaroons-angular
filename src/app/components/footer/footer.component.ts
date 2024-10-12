import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  phone = '375(29)3689868';
  instagram = 'https://www.instagram.com'

  constructor() { }

}
