import Toast from './toast'
import Icon from './icon'
import Button from './button'

import Col from './col'
import Row from './row'

import Menu from './menu'
import Radio from './radio'
import Checkbox from './checkbox'

import Input from './input'
import InputNumber from './input-number'
import Select from './select'

//自动计算
import Autocomplete from './autocomplete'

import Cascader from './cascader'


const install = function (Vue) {
    Vue.use(Toast);
    Vue.use(Icon);
    Vue.use(Button);
    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Menu);
    Vue.use(Radio);
    Vue.use(Checkbox);

    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Select);
    Vue.use(Autocomplete);
 

}

export default { 
    version: '1.12.0',
    install,
    Button,
    Icon,
    Row,
    Col,
    Menu,
    Radio,
    Checkbox,
    Input,
    InputNumber,
    Select,
    Autocomplete,
  
};

