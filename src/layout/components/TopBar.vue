<template>
  <div class="nav-top">
    <div flex>
      <div class="menu-fold" @click="toggleIsCollapse">
        <el-icon>
          <component :is="isCollapse ? 'i-fold' : 'i-expand'" />
        </el-icon>
      </div>
    </div>
    <AvatarInfo />
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import AvatarInfo from './AvatarInfo.vue';

  const props = defineProps({
    modelValue: { type: Boolean, default: false },
    menus: { type: Array, default: () => [] },
  });
  const emits = defineEmits(['update:modelValue']);

  const isCollapse = computed({
    set(val) {
      emits('update:modelValue', val);
    },
    get() {
      return props.modelValue;
    },
  });

  const toggleIsCollapse = () => {
    isCollapse.value = !isCollapse.value;
  };

  onUnmounted(() => {
    sessionStorage.removeItem('activeTag');
  });
</script>
<style lang="scss" scoped>
  .nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    border-bottom: 1px solid #ddd;
    line-height: 50px;

    .menu-fold {
      display: flex;
      align-items: center;
      margin-right: 15px;
      font-size: 18px;
      cursor: pointer;
    }
  }
</style>
