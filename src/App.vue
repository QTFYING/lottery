<template>
  <el-container>
    <el-header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/about">责任彩票</RouterLink>
          <RouterLink to="/info">联赛资料</RouterLink>
          <RouterLink to="/news">竞彩资讯</RouterLink>
          <RouterLink to="/schedule">竞猜赛程</RouterLink>
          <RouterLink to="/live">比分直播</RouterLink>
        </nav>
      </div>
    </el-header>

    <el-main>
      <RouterView />
    </el-main>

    <el-footer>Footer</el-footer>
  </el-container>
  <header></header>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
