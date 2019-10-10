import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from '../../utils/popup';

let mainConstructor = Vue.extend(Main);
let instance;
let instances = [];
let seed = 1;

/**
 * 
 * @param {*} options 
 * @param {*} callback 消息关闭后的回调
 * 
 */
const mainAction = (options, callback) => {
    if (typeof options == 'string' ) {
        options = {
            msg: options
        };
    }
    options = {
        msg: options.msg || 'toast消息',

    }
    let id = 'message_' + seed++;
    //实例
    instance = new mainConstructor({
        data: options
    });
    //挂载
    instance.$mount();
    document.body.appendChild(instance.$el);
    //显示
    instance.visible = true;
    //层级
    instance.$el.style.zIndex = PopupManager.nextZIndex();
    instances.push(instance);
    return instance;
}

export default mainAction;

