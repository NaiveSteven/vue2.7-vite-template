<template>
  <div h-full w-full flex overflow-hidden>
    <div h-full overflow-auto>
      <SideBar :menu-data="menuList" :is-collapse="isCollapse" />
    </div>
    <div overflow-hidden flex-1>
      <TopBar v-model="isCollapse" :menus="menuList" />
      <div bg-gray-200 p-4 overflow-auto :style="containerStyle">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
  import SideBar from './components/SideBar.vue';
  import TopBar from './components/TopBar.vue';

  const route = useRoute();
  const isCollapse = ref(false);

  const containerStyle = computed(() => ({
    height: route.value.meta.parentName
      ? 'calc(100vh - 100px)'
      : 'calc(100vh - 50px)',
  }));
  const menuList = ref([
    {
      name: 'router',
      icon: 'el-icon-s-tools',
      label: '菜单1',
      children: [
        {
          name: 'route',
          icon: 'el-icon-s-tools',
          label: 'route',
        },
      ],
    },
    {
      name: 'pinia',
      icon: 'el-icon-s-tools',
      label: 'pinia',
    },
  ]);
</script>
<style lang="scss"></style>
