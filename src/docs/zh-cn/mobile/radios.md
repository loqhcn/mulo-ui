## happyzoo上的radio


:::demo
```html
    <template>
         <m-radio-hz v-model="selected" value="1">男</m-radio-hz>
         <m-radio-hz v-model="selected" value="0">女</m-radio-hz>
    </template>
    <script>
    export default {
        data() {
            return {
                selected:0,
            }
        },
    }
</script>
```
:::