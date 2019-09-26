<template>
    <div>
        <div>radios</div>
        <div class="flex column center-line">
            <div class="title">happyzoo-radio</div>
            <div>
                <m-radio-hz v-model="selected" value="1">男</m-radio-hz>
                <m-radio-hz v-model="selected" value="0">女</m-radio-hz>
                <br>
                {{selected}}
            </div>
        </div>
    </div>
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

<style lang="scss" scoped>
.title{
    color: black;
}
</style>