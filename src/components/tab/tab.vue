<script setup lang="ts">
import { reactive, ref } from 'vue';

const data = reactive({
  linkList: [
    {
      label: '推荐',
      path: '/recommend',
      isActive: true,
    },
    {
      label: '歌手',
      path: '/singer',
      isActive: false,
    },
    {
      label: '排行',
      path: '/ranking',
      isActive: false,
    },
    {
      label: '搜索',
      path: '/search',
      isActive: false,
    },
  ],
});

const handleClick = (index: number) => {
  data.linkList.forEach((item) => {
    item.isActive = false;
  });
  data.linkList[index].isActive = true;
};
</script>

<template>
  <div class="container">
    <div v-for="(item, index) in data.linkList" class="tab-item">
      <router-link :key="item.path" :to="item.path">
        <span :class="{ active: item.isActive }" @click="handleClick(index)">{{
          item.label
        }}</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.active {
  color: rgb(177, 211, 57);
  border-bottom: 2px solid rgb(177, 211, 57);
}
.container {
  display: flex;
  .tab-item {
    flex: 1;
    span {
      padding-bottom: 10px;
    }
  }
}
</style>
