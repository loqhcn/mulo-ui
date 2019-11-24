import Carousel from './main';
import CarouselItem from './item';

/* istanbul ignore next */
Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
  Vue.component(CarouselItem.name, CarouselItem);
};

export default Carousel;
