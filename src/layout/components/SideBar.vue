<template>
  <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
    <div class="logo"> 系统 </div>
    <el-menu
      ref="menuRefs"
      class="nav-menu"
      background-color="#001529"
      text-color="#fff"
      :default-active="activeMenu"
      :default-openeds="defaultOpens"
      :collapse="isCollapse"
      @select="handleSelectMenu"
    >
      <tree-menu :menu-data="menuData" />
    </el-menu>
  </div>
</template>

<script setup>
  import TreeMenu from './TreeMenu.vue';

  defineProps({
    isCollapse: { type: Boolean, default: false },
    menuData: { type: Array, default: () => [] },
  });
  const route = useRoute();
  const router = useRouter();

  const menuRefs = ref();
  const activeMenu = sessionStorage.getItem('activeMenu')
    ? ref(sessionStorage.getItem('activeMenu'))
    : ref('');
  const defaultOpens = ref([]);

  watch(
    () => route,
    async () => {
      await nextTick();
      const name = route.value.meta.parentName
        ? route.value.meta.parentName
        : route.value.name;
      activeMenu.value = name;
      sessionStorage.setItem('activeMenu', name);
      // const parentMenu = getParentMenu(name);
      // if (parentMenu.name) {
      //   menuRefs.value.open(parentMenu.name);
      // }
    },
    { immediate: true, deep: true }
  );

  const handleSelectMenu = (name) => {
    if (route.value.name !== name) {
      // 清空表格筛选数据缓存
      sessionStorage.removeItem('tableProFormData');
      sessionStorage.removeItem('tableProPagination');
      router.push({
        name,
      });
    }
  };

  // const getParentMenu = (name: string) => {
  //   let parentMenu: Menu = {} as Menu;
  //   menuStore.flatMenuData.forEach((item) => {
  //     if (item.children && item.children.length) {
  //       item.children.forEach((child) => {
  //         if (child.name === name) {
  //           parentMenu = item;
  //         }
  //       });
  //     }
  //   });
  //   return parentMenu;
  // };

  onUnmounted(() => {
    sessionStorage.removeItem('activeMenu');
  });
</script>

<style lang="scss" scoped>
  .nav-side {
    width: 200px;
    color: #fff;
    background-color: #001529;
    transition: width 0.5s;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: 18px;

      img {
        margin: 16px;
        width: 150px;
      }
    }

    .nav-menu {
      z-index: 1;
      height: calc(100vh - 50px);
      border-right: none;
    }

    // 合并
    &.fold {
      width: 64px;
    }

    // 展开
    &.unfold {
      width: 200px;
    }
  }
</style>
