import nowComponent from './toast.vue';

/* istanbul ignore next */
nowComponent.install = function (Vue) {
    Vue.component(nowComponent.name, nowComponent);
};

export default nowComponent;