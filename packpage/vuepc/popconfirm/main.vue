<template>
  <el-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="el-popconfirm">
    <p class="el-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="el-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="el-popconfirm__action">
      <o-button 
        size="mini" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{cancelButtonText}}
      </o-button>
      <o-button 
        size="mini" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{confirmButtonText}}
      </o-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</el-popover>
</template>

<script>
import ElPopover from './../popover';
import ElButton from './../button';
import {t} from 'mulo-ui/packpage/locale';

export default {
  name: 'OPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('el.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('el.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElPopover,
    ElButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
