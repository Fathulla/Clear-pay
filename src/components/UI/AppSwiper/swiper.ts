//@ts-nocheck

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

const swiperParams: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
};

const swiper = new Swiper('.swiper', swiperParams);