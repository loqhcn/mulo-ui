
import nowComponent from './icon.vue';


//安装脚本
nowComponent.install = function (Vue) {
    Vue.component(nowComponent.name, nowComponent)
};

export default nowComponent;