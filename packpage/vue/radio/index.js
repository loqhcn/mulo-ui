
//happyZoo 的 radio
import radioHz from './src/radio-hz';

/* istanbul ignore next */
radioHz.install = function (Vue) {
    Vue.component(radioHz.name, radioHz);
};

export default radioHz;