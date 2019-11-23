import ElButton from './button';
import buttongroup from './button-group';

/* istanbul ignore next */


export default {
  install: function (Vue) {
    Vue.component(ElButton.name, ElButton);
    Vue.component(buttongroup.name, buttongroup);
  }
};
