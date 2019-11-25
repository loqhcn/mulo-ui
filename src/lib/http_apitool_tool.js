import axios from 'axios'
import appConfig from '../config/app';
import router from '../router'
import http_apitool from './http_apitool'

const instance = axios.create({
    baseURL: appConfig.apitoolBaseUrl,
    timeout: 30000,
    headers: {},
});



//访问拦截器  添加用户认证领令牌
instance.interceptors.request.use(function (config) {
    console.log(config);
    //数据修改为fromdata模式提交
    http_apitool.post('api_request/insertLog',{
        url:config.url,
        params:config.data,
        baseURL:config.baseURL,
    })
    //获取项目

    //请求附带用户认证令牌
    var TOKEN = localStorage.getItem('auth_token');
    if (TOKEN) {
        config.headers['x-auth-token'] = `${TOKEN}`;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response.data);
    //TODO 判断登录状态
    if (response.data && response.data.errno) {
        if (response.data.errno == 777) {
            router.app.$auth.relogin();
        }
    }

    return response.data;

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance;



