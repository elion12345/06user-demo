<template>
  <div class="user-name-container">
    <div v-if="status === 'loading'">Loading</div>

    <div v-else-if="status === 'login'">
      <router-link :to="{ name: 'User' }">{{ user.name }}</router-link>
      <a @click.prevent="handleLoginOut" class="exit">退出</a>
    </div>

    <router-link v-else :to="{ name: 'Login' }" exact-path>
      登录
    </router-link>
  </div>
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  computed: {
    ...mapState("loginUser", ["user"]),
    ...mapGetters("loginUser", ["status"]),
  },
  // 另一种方法
  // computed: {
  //   name() {
  //     return this.$store.state.loginUser.user.name;
  //   },
  //   status() {
  //     return this.$store.getters["loginUser/status"];
  //   },
  // },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    },
  },

};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.user-name-container {
  display: flex;
  align-items: center;
  .exit {
    padding: 5px 10px;
    font-weight: normal;
    color: #666;
    font-size: 12px;
    border: 1px solid #e5e5e5;
    &:hover {
      color: slateblue;
      border-color: rgb(210, 203, 255);
    }
  }
}
</style>
