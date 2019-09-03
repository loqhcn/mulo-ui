import MuloButton from './src/button';

/* istanbul ignore next */
MuloButton.install = function (Vue) {
    Vue.component(MuloButton.name, MuloButton);
};

export default MuloButton;