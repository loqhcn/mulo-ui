import Dropdown from './dropdown';
import DropdownMenu from './dropdown-menu';
import DropdownItem from './dropdown-item';

/* istanbul ignore next */
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);
  Vue.component(DropdownItem.name, DropdownItem);
};

export default Dropdown;
