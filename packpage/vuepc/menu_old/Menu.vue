<template>
    <div class="menu " :class="{column:column}">
        <slot name="title"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'o-menu',
        props: {
            column: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
             
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>