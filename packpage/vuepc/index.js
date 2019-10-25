import Toast from './toast'
import Icon from './icon'
import Button from './button'

import Col from './col'
import Row from './row'

const install = function (Vue) {
    Vue.use(Toast);
    Vue.use(Icon);
    Vue.use(Button);
    Vue.use(Col);
    Vue.use(Row);
}

export default { 
    version: '1.12.0',
    install,
    Button,
    Icon,
    
    Row,
    Col
};

