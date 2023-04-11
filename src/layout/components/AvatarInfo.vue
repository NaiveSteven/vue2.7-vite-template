<template>
  <div flex items-center justify-center>
    <el-dropdown @command="handleClick">
      <span cursor-pointer class="el-avatar el-avatar--circle">
        <img src="@/assets/useravatar.svg" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="userInfo">用户信息</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
  const handleClick = (command) => {
    if (command === 'logout') {
      logout();
    }
    if (command === 'userInfo') {
      console.log('userInfo');
    }
  };

  const logout = () => {
    console.log('退出登录');
  };
</script>
<style lang="scss" scoped>
  ::v-deep(.el-dropdown) {
    line-height: 14px;
  }
</style>
