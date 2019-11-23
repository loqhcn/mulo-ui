import Calendar from './main';

/* istanbul ignore next */
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;
