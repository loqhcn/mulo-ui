import Button from './button'
import Radio from './radio'

const install = function (Vue) {
    Vue.use(Button);
    Vue.use(Radio);

}

export default {
    version: '2.12.0',
    install,
    Button,
    Radio
};