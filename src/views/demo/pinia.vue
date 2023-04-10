<template>
  <div>
    <HelloWorld />
    <div v-if="hasOriginPath" mb-4>
      <button @click="goBack">返回上一页</button>
    </div>
    <p mb-4>当前数量：{{ count }}</p>
    <button @click="accumulate">累加</button>
  </div>
</template>

<script setup>
  import { useDemoStore } from '@/store';

  const route = useRoute();
  const router = useRouter();

  const hasOriginPath = computed(() => !!route.value.query.originPath);

  function goBack() {
    const { path, query } = route.value;
    router.replace({ path: query.originPath, query: { originPath: path } });
  }

  const demoStore = useDemoStore();
  const count = computed(() => demoStore.count); // 获取单个 state 时，需要使用 computed，否则数据不是响应式
  const accumulate = () => demoStore.accumulate();
</script>

<style lang="scss" scoped></style>
