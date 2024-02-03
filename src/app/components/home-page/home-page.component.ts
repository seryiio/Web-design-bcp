import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-home-page',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {
    const swiperElemConstructorContent1 = document.querySelector('.container__content1');

    const swiperElemConstructorContent5 = document.querySelector('.container-5__content--courses');

    const swiperOptionsContent1: SwiperOptions = {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    const swiperOptionsContent5: SwiperOptions = {
      spaceBetween: 30,
      freeMode: true,
      slidesPerView: 3,
    };

    Object.assign(swiperElemConstructorContent1!, swiperOptionsContent1);
    Object.assign(swiperElemConstructorContent5!, swiperOptionsContent5);
    this.swiperElement.set(swiperElemConstructorContent1 as SwiperContainer);
    this.swiperElement.set(swiperElemConstructorContent5 as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
