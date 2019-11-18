<template>
  <div class="flex space-between mulo-ui-header">
    <router-link to="/">
      <h1 class="mulo-ui-logo">Mulo Ui</h1>
    </router-link>
    <ul class="mainmenu flex center-line wrap">
      <li>
        <router-link class="routelink" to="/index/main">主页</router-link>
      </li>
      <li>
        <router-link class="routelink" to="/index/components">mobile组件</router-link>
      </li>
      <li>
        <router-link class="routelink" to="/index/components-web">web组件</router-link>
      </li>
       <li>
        <router-link class="routelink" to="/index/css-doc">css样式类</router-link>
      </li>
      <!-- <li>
        <router-link class="routelink" to="/index/tutorial">教程</router-link>
      </li> -->
      <li>
        <router-link class="routelink" to="/index/tool">工具</router-link>
      </li>
      <li>
        <router-link class="routelink" to="/index/admin">后台模板</router-link>
      </li>
      <li>
        <a href="https://github.com/loqhcn/mulo-ui" class="routelink" target="nextwindow">
          <svg
            class="octicon octicon-mark-github v-align-middle"
            height="32"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mulo-ui-header {
  border-bottom: 1px solid #67c23a;
  background-color: #e7e5e6;
}
.mainmenu {
  border-radius: 0.4rem;
  padding: 0.3rem;
}

.mainmenu li .routelink {
  color: #e7e5e6;
  padding: 0.4rem 0;
  margin: 0 1rem;
  text-align: center;
  position: relative;
  color: #20360c;
}
.bg-green {
  background-image: linear-gradient(#4d5319, green);
}
.router-link-active {
  color: red;
  border-bottom: 2px solid #67c23a;
}
.mainmenu li .routelink:hover {
  color: #20360c;
  animation: toggle-color-default 3s infinite;
  transform: scale(1.3);
}

@keyframes toggle-color-default {
  0% {
    color: #20360c;
  }
  40% {
    color: #9a8779;
  }
  60% {
    color: #cc5f7c;
  }
  80% {
    color: #9a8779;
  }
  100% {
    color: #20360c;
  }
}

.mulo-ui-logo {
  color: red;
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mulo-ui-header {
  padding: 0 20px;
}
</style>