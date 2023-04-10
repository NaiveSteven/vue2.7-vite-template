<template>
  <div class="base-layout">
    <ul class="base-layout__menu">
      <li
        v-for="route of routes"
        :key="route.path"
        :class="{ active: isActive(route.path) }"
        @click="toPath(route.path)"
      >
        {{ route.meta.title }}
      </li>
    </ul>

    <div class="base-layout__main">
      <router-view></router-view>
    </div>

    <div class="base-layout__footer">
      Vue2.7 + Vite + Less + Eslint + Stylelint + Commitlint 工程化脚手架。
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      const router = useRouter();
      const route = useRoute();

      const demoRoutes = router.options.routes[1].children;

      function isActive(path) {
        return route.value.path === `/demo/${path}`;
      }

      function toPath(path) {
        router.push(`/demo/${path}`);
      }

      return {
        routes: demoRoutes,
        isActive,
        toPath,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .base-layout {
    height: 100%;
    background-color: #f5f5f5;

    &__menu {
      padding-top: 8px;
      height: 48px;
      border-bottom: 1px solid #eee;
      background-color: #fff;

      li {
        position: relative;
        top: 1px;
        display: inline-block;
        margin-left: 8px;
        padding: 0 8px;
        height: 41px;
        font-size: 14px;
        border: 1px solid transparent;
        text-align: center;
        line-height: 40px;
        cursor: pointer;

        &.active,
        &:hover {
          border-color: #eee;
          border-bottom-color: #f5f5f5;
          border-radius: 8px 8px 0 0;
          background-color: #f5f5f5;
        }
      }
    }

    &__main {
      overflow: auto;
      padding: 16px;
      min-height: calc(100% - 45px - 48px);
    }

    &__footer {
      padding: 16px 0;
      font-size: 12px;
      border-top: 1px solid #eee;
      text-align: center;
      color: #c3c3c3;
    }
  }
</style>
