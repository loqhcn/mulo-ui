import ElButton from './button.vue';
import buttongroup from './button-group.vue';

/* istanbul ignore next */


export default {
  install: function (Vue) {
    Vue.component(ElButton.name, ElButton);
    Vue.component(buttongroup.name, buttongroup);
  }
};
