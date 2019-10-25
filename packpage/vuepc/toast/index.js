import pluginInfo from './main.js';
import nowComponent from './main.vue';

console.log(pluginInfo)

//安装脚本
nowComponent.install = function (Vue) {
    Vue.prototype.$toast = pluginInfo;
};

export default nowComponent;