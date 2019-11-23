import Drawer from './main';

/* istanbul ignore next */
Drawer.install = function(Vue) {
  Vue.component(Drawer.name, Drawer);
};

export default Drawer;
