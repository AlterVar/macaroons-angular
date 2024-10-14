import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'macaroons';
  showPresent = true;
  instagram = 'https://instagram.com/'
  phoneHref = 'tel:375(29)3689868';
  phone = '+375 (29) 368-98-68';

  advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]
  products: ProductType[] = [
    {
      title: 'Макарун с малиной',
      image: 'product1.png',
      amount: '1 шт.',
      price: '1,30 руб.',
    },
    {
      title: 'Макарун с манго',
      image: 'product2.png',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      title: 'Пирог с ванилью',
      image: 'product3.png',
      amount: '1 шт.',
      price: '2,00 руб.',
    },
    {
      title: 'Пирог с фисташками',
      image: 'product4.png',
      amount: '1 шт.',
      price: '2,50 руб.',
    },
  ];

  formInfo = {
    position: '',
    name: '',
    phone: ''
  };

  public scrollToBlock(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(position: ProductType, item: HTMLElement) {
    this.scrollToBlock(item);
    this.formInfo.position = position.title.toUpperCase();
  }

  public open(item: HTMLElement): void {
    item.classList.add('open');
  }

  public close(item: HTMLElement, target: HTMLElement | null) {
    item.classList.remove('open');
    if (target) {
      this.scrollToBlock(target);
    }
  }
}
