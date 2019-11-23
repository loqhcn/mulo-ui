import Select from './select.vue';

import Option from './option.vue';
import OptionGroup from './option-group.vue';
import SelectDropdown from './select-dropdown.vue';

export default {
  install: function (Vue) {
    Vue.component(Select.name, Select);
    Vue.component(Option.name, Option);
    Vue.component(OptionGroup.name, OptionGroup);
    Vue.component(SelectDropdown.name, SelectDropdown);
  }
};
