import ElTabs from './tabs';
import ElTabPane from './tab-pane';

/* istanbul ignore next */
ElTabs.install = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
  Vue.component(ElTabPane.name, ElTabPane);

};

export default ElTabs;
