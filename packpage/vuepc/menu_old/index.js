
import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';
import Submenu from './Submenu.vue';





export default {
    install:function (Vue){
        Vue.component(Menu.name, Menu)
        Vue.component(MenuItem.name, MenuItem)
        Vue.component(Submenu.name, Submenu)

    }
};