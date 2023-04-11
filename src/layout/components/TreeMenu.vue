<template>
  <div>
    <template v-for="menu in menuData">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :key="menu.name"
        :index="menu.name"
      >
        <template #title>
          <i :class="menu.icon" />
          <span>{{ menu.label }}</span>
        </template>
        <tree-menu :menu-data="menu.children" />
      </el-submenu>
      <el-menu-item
        v-if="!menu.children || menu.children.length === 0"
        :key="menu.name"
        :index="menu.name"
      >
        <i :class="menu.icon" />
        <template #title>
          <span>{{ menu.label }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script setup>
  defineProps({ menuData: { type: Array, default: () => [] } });
</script>
