<template>
  <div>
    <head-link></head-link>
    <div class="login">
      <div class="contentbox">
        <div class="ttxt flex space-between">
          <div>注册账户</div>
          
        </div>
        <div class="bindphone flex column center-line">
          <input
            class="code-input phone"
            v-model="phone"
            @input="inputPhone"
            type="number"
            placeholder="请输入邮箱"
          />

          <div class="inputcode flex space-between">
            <input
              class="code-input code"
              v-model="code"
              @input="inputCode"
              type="number"
              placeholder="请输入验证码"
            />
            <img
              v-if="code"
              @click="code=''"
              class="cancelbtn"
              src="/static/image/quxiao.png"
              alt
              srcset
            />
            <button
              class="codebtn btn code-get"
              @click="sendCode()"
              :class="{active:(daojishi>0)}"
            >{{ daojishi?( `${daojishi}s 后重新获取` ):(sendTimes?'获取验证码':'获取验证码') }}</button>
          </div>

          <button
            class="btn nextbtn"
            @click="submit()"
            :class="{active:(code&&phone),doing:lockSubmit}"
          >{{lockSubmit?"提交中...":'下一步'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout, clearInterval, setInterval } from "timers";
let validate = require("mulo-validate");
export default {
  data() {
    return {
      //输入
      phone: "",
      code: "",
      //倒计时
      daojishi: 0,
      daojishiMax: 60,
      //操作控制
      lockSubmit: false,
      sendTimes: 0, //累计发送次数,
      showLoginDo: false //显示真实登录窗口
    };
  },
  created() {
      this.$auth.hideLogin();
  },
  methods: {
    showlogin() {
      this.showLoginDo = true;
    },
    close() {
      this.showLoginDo = false;
    },
    inputPhone(e) {
      this.phone = this.phone.substr(0, 11);
    },
    inputCode(e) {
      this.code = this.code.substr(0, 6);
    },
    submit() {
      if (!validate.mobile(this.phone)) {
        this.$toast("手机号不正确");
        return;
      }
      if (!this.code) {
        this.$toast("请输入验证码");
        return;
      }
      if (!/^[0-9]{4,6}$/.test(this.code)) {
        this.$toast("验证码不正确");
        return;
      }
      if (this.lockSubmit) {
        return;
      }
      this.lockSubmit = true;
      this.$http
        .post("/login/mobile", {
          mobile: this.phone,
          code: this.code
        })
        .then(res => {
          this.lockSubmit = false;
          if (res.code != 200) {
            this.$toast(res.msg);
            return;
          }
          //登录令牌
          localStorage.setItem("auth_token", res.token);

          this.$auth.afterLogin();
          this.$toast("登录成功");
        });
    },
    /**
     * 发送验证码
     *
     */
    sendCode() {
      if (!this.phone) {
        this.$toast("邮箱错误");
        return;
      }
      if (this.daojishi > 0) {
        return;
      }

      //开启倒计时
      this.daojishi = this.daojishiMax;
      var daojishiRun = setInterval(() => {
        if (this.daojishi <= 0) {
          clearInterval(daojishiRun);
          return;
        }
        this.daojishi--;
      }, 1000);

      //发送验证
      this.$http
        .post("/sms/code", { mobile: this.phone })
        .then(res => {
          if (res.code != 200) {
            clearInterval(daojishiRun);
            this.daojishi = 0;
            this.$toast(res.msg);
            return;
          }
          this.sendTimes++;
        })
        .catch(err => {
          this.$toast("发送失败");
          clearTimeout(daojishiRun);
          this.daojishi = 0;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-tish {
  height: 100%;
  width: 100%;
  background-color: #fff;
  * {
    margin: 0.5rem 0;
  }
  .login-do-btn {
    background-color: #c29b84;
    border: 0;
    color: white;
    padding: 0.2rem 1rem;
    font-size: 0.7rem;
  }
  .tishiwenzi {
    font-size: 1.2rem;
  }
}
.emptyimg {
  width: 7rem;
  margin-top: 3rem;
}
.code-input {
  width: 15rem;
  height: 2.4rem;
  border: 1px solid rgba(49, 49, 49, 0.1);
  padding-left: 0.83rem;
  border-radius: 0.3rem;
  font-size: 0.75rem;

  font-weight: 400;
  box-sizing: border-box;
}

//验证阿输入
.code-input.code {
  width: 8.78rem;
  height: 2.4rem;
  padding-right: 2rem;
}
.code-get {
  width: 6.1rem;
  height: 2.4rem;
  background: rgba(90, 54, 68, 1);
  border-radius: 5px;
  font-size: 0.7rem;

  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 0.13rem;
}
.code-get.active {
  background: rgb(177, 175, 175);
  font-size: 0.7rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(49, 49, 49, 0.2);
}

// placeholder属性样式
@mixin placeholder_input_code {
  font-size: 0.75rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: red;
  color: rgba(74, 74, 74, 0.3);
}
.code-input::-webkit-input-placeholder {
  @include placeholder_input_code;
}
.code-input:-moz-placeholder {
  @include placeholder_input_code;
}
.code-input::-moz-placeholder {
  @include placeholder_input_code;
}
.code-input:-ms-input-placeholder {
  @include placeholder_input_code;
}
.code-input::placeholder {
  @include placeholder_input_code;
}

.ttxt {
  font-size: 1.2rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: #616161;
}
.bindphone {
  margin-top: 1.83rem;
}
.inputcode {
  margin-top: 0.7rem;
  position: relative;
}

//下一步按钮
.nextbtn {
  margin-top: 2.23rem;
  width: 15rem;
  height: 2.4rem;
  background: rgba(49, 49, 49, 0.05);
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(49, 49, 49, 0.2);
}
.nextbtn.active {
  background: rgba(90, 54, 68, 1);
  font-size: 0.85rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.nextbtn.doing {
  background: rgba(49, 49, 49, 0.05);
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(49, 49, 49, 0.2);
}

.footerimg {
  width: 17.93rem;
  height: 12.68rem;
  position: absolute;
  left: 0.43rem;
  top: 17.33rem;
}
// 取消按钮
.cancelbtn {
  width: 0.75rem;
  height: 0.75rem;
  position: absolute;
  top: 0.83rem;
  left: 7.23rem;
  z-index: 13;
}

//pc版本样式适配
.login-pc {
}
.login {
  background-color: #fff;
}
</style>