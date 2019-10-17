<template>
  <div>
    文档编写模板
    <div class="pannel">
      <div class="pannel-body" v-highlight>
        <pre><code class="html javascript hljs-javadoc hljs xml"></code></pre>
      </div>
    </div>

    <div v-for="x in 1000" :key="x">{{x}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: `              <div class="pannel">
                <div class="pannel-body" v-highlight>
                  <pre><code class="html javascript hljs-javadoc hljs xml">{{code1}}</code></pre>
                </div>
              </div>`
    };
  },
  methods: {
    escape(e) {
      return escape(e);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>