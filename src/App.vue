<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'Home' }"> 首页 </router-link>
      <router-link :to="{ name: 'News' }"> 新闻 </router-link>
      <UserName />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import UserName from "@/components/UserName";
export default {
  name: "App",
  components: {
    UserName,
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
#app {
  height: 600px;
  border: 1px solid #000;
  box-sizing: border-box;
  text-align: center;
}
.nav {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>>
