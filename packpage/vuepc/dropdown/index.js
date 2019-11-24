import Dropdown from './dropdown';
import DropdownMenu from './dropdown-menu';

/* istanbul ignore next */
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);

};

export default Dropdown;
