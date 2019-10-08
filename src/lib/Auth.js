
import router from './../router'

/**
 * 用户认证辅助函数
 */
class Auth {



    /**
     * 是否登录过
     * 
     */
    isLogin() {
        return localStorage.auth_token ? true : false;
    }

    /**
   * 登录前
   * 
   * @param {} saveUrl  保存当前链接
   */
    beforeLogin(saveUrl) {
        //@todo 保存返回链接
        if (saveUrl) {
            localStorage.setItem('app_user_logined_callback', router.app.$route.fullPath)
        }
        
    }

    //重新登录
    relogin() {
        localStorage.clear();
        this.beforeLogin(true);
        this.toLogin();
    }

    /**
    * 前往登录页面
    */
    toLogin() {

        //手机端
        router.app.$children[0].showLogin = true;
    }


    /**
     * 登录后
     * 
     */
    afterLogin() {
        //弹出层登录关闭
        this.appMain().showLogin = false;
        this.appMain().reload();
    }

    /**
     * 隐藏登录
     */
    hideLogin() {
        this.appMain().showLogin = false;
    }

    appMain() {
        return router.app.$children[0];
    }


}

export default Auth;