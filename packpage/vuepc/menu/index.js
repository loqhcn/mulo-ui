
import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';





export default {
    install:function (Vue){
        Vue.component(Menu.name, Menu)
        Vue.component(MenuItem.name, MenuItem)
    }
};