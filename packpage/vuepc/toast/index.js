import pluginInfo from './main.js';
import nowComponent from './main.vue';


//安装脚本
nowComponent.install = function (Vue) {
    Vue.prototype.$toast = pluginInfo;
};

export default nowComponent;