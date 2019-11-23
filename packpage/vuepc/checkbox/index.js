import Checkbox from './checkbox.vue';
import CheckboxButton from './checkbox-button.vue';
import CheckboxGroup from './checkbox-group.vue';



export default {
  install: function (Vue) {
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxButton.name, CheckboxButton);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
  }
};
