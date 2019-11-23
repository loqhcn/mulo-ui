import ElMenu from './menu.vue';
import ElMenuItemGroup from './menu-item-group.vue';
import ElMenuItem from './menu-item.vue';
import submenu from './submenu.vue';

// /* istanbul ignore next */
// ElMenu.install = function(Vue) {
//   Vue.component(ElMenu.name, ElMenu);
//   Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
//   Vue.component(ElMenuItem.name, ElMenuItem);
// };

// export default ElMenu;

export default {
  install: function (Vue) {
    Vue.component(ElMenu.name, ElMenu);
    Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
    Vue.component(ElMenuItem.name, ElMenuItem);
    Vue.component(submenu.name, submenu);


  }
};