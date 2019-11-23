import Rate from './main';

/* istanbul ignore next */
Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

export default Rate;
