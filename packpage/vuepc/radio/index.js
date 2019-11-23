import Radio from './radio';
import RadioButton from './radio-button';
import RadioGroup from './radio-group';



export default {
  install: function (Vue) {
    Vue.component(Radio.name, Radio);
    Vue.component(RadioButton.name, RadioButton);
    Vue.component(RadioGroup.name, RadioGroup);
  }
};