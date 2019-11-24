import Toast from './toast'
import Icon from './icon'
import Button from './button'

import Col from './col'
import Row from './row'


import Radio from './radio'
import Checkbox from './checkbox'

import Input from './input'
import InputNumber from './input-number'
import Select from './select'

//自动计算
import Autocomplete from './autocomplete'

import Cascader from './cascader'
import CascaderPanel from './cascader-panel';
import Switch from './switch'
import Slider from './slider'

import DatePicker from './date-picker'
import Update from './upload'

import Rate from './rate'
import ColorPicker from './color-picker'
// import Transfer from './transfer'
import Form from './form'

//data
import Table from './table'
import Tag from './tag'
import Progress from './progress'
import Tree from './tree'
import Pagination from './pagination'
import Badge from './badge'
import Avatar from './avatar'
//notice
import Alert from './alert'
import Loading from './loading'
import Message from './message'
import MessageBox from './message-box'
import Notification from './notification'


import Menu from './menu'
import Breadcrumb from './breadcrumb'
import Tabs from './tabs'
import PageHeader from './page-header'
import Dropdown from './dropdown'
import Steps from './steps'

//other
import Dialog from './dialog'
import Tooltip from './tooltip'
import Popover from './popover'
import Card from './card'
import Carousel from './carousel'
import Collapse from './collapse'
import Timeline from './timeline'
import Divider from './divider'
import Calendar from './calendar'
import Image from './image'
import Backtop from './backtop'
import InfiniteScroll from './infinite-scroll'
import Drawer from './drawer'



const install = function (Vue) {
    Vue.use(Toast);
    Vue.use(Icon);
    Vue.use(Button);
    Vue.use(Col);
    Vue.use(Row);

    //form
    Vue.use(Radio);
    Vue.use(Checkbox);
    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Select);
    Vue.use(Autocomplete);
    Vue.use(Cascader);
    Vue.use(CascaderPanel);
    Vue.use(Switch);
    Vue.use(Slider);
    Vue.use(Tooltip);
    Vue.use(DatePicker);
    Vue.use(Update);
    Vue.use(Rate);
    Vue.use(ColorPicker);

    // Vue.use(Transfer);
    Vue.use(Form);

    //data
    Vue.use(Table);
    Vue.use(Tag);
    Vue.use(Progress);
    Vue.use(Tree);
    Vue.use(Pagination);
    Vue.use(Badge);
    Vue.use(Avatar);
    //notice
    Vue.use(Alert);
    Vue.use(Loading);
    Vue.use(Message);
    Vue.use(MessageBox);
    Vue.use(Notification);
    //Navigation导航
    Vue.use(Menu);
    Vue.use(Breadcrumb);
    Vue.use(Tabs);
    Vue.use(PageHeader);
    Vue.use(Dropdown);
    Vue.use(Steps);
    Vue.use(Dialog)
    Vue.use(Tooltip)
    Vue.use(Popover)
    Vue.use(Card)
    Vue.use(Carousel)
    Vue.use(Collapse)
    Vue.use(Timeline)
    Vue.use(Divider)
    Vue.use(Calendar)
    Vue.use(Image)
    Vue.use(Backtop)
    Vue.use(InfiniteScroll)
    Vue.use(Drawer)

}

export default {
    version: '1.12.0',
    install,
    Button,
    Icon,
    Row,
    Col,

    //form
    Radio,
    Checkbox,
    Input,
    InputNumber,
    Select,
    Autocomplete,
    Cascader,
    CascaderPanel,
    Switch,
    Slider,
    Tooltip,
    DatePicker,
    Update,
    Rate,
    ColorPicker,
    // Transfer,
    Form,
    //data
    Table,
    Tag,
    Progress,
    Tree,
    Pagination,
    Badge,
    Avatar,
    //notice
    Alert,
    Loading,
    Message,
    MessageBox,
    Notification,
    //
    Menu,
    Breadcrumb,
    Tabs,
    PageHeader,
    Dropdown,
    Steps,
    Dialog,
    //other

    Tooltip,
    Popover,
    Card,
    Carousel,
    Collapse,
    Timeline,
    Divider,
    Calendar,
    Image,
    Backtop,
    InfiniteScroll,
    Drawer,
    

};

