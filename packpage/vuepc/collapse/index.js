import ElCollapse from './collapse';
import ElCollapseItem from './collapse-item';


/* istanbul ignore next */
ElCollapse.install = function(Vue) {
  Vue.component(ElCollapse.name, ElCollapse);
  Vue.component(ElCollapseItem.name, ElCollapseItem);

};

export default ElCollapse;

