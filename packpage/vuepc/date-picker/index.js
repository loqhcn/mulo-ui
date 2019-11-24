import DatePicker from './picker/date-picker';
import TimePicker from './picker/time-picker';
import TimeSelect from './picker/time-select';


// /* istanbul ignore next */
// DatePicker.install = function install(Vue) {
//   Vue.component(DatePicker.name, DatePicker);
// };

export default {
  install: function install(Vue) {
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(TimeSelect.name, TimeSelect);

  }
};
