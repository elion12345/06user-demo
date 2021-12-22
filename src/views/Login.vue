<template>
  <form class="login-container" action="" @submit.prevent="handleSubmit">
    <div class="form-item">
      <label for="loginName">账号</label>
      <input
        type="text"
        placeholder="请输入账号"
        id="loginName"
        v-model="loginId"
      />
    </div>
    <div class="form-item">
      <label for="passWord">密码</label>
      <input
        type="password"
        autocomplete="new-password"
        placeholder="请输入密码"
        id="passWord"
        v-model="loginPwd"
      />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="isLoading">
        {{ isLoading ? "登录中..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loginUser.isLoading;
    },
  },
  methods: {
    async handleSubmit() {
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (resp) {
        const path = this.$route.query.returnUrl || '/'
        this.$router.push(path);
      } else {
        alert("账号密码错误");
      }
    },
  },

};
</script>

<style lang="less" scoped>
.form-item {
  width: 400px;
  margin: 20px auto;
  font-size: 14px;
  display: flex;
  align-items: center;

  input,
  button {
    outline: none;
    border-radius: 4px;
    flex: 1 1 auto;
    height: 40px;
  }
  input {
    box-sizing: border-box;
    border: 1px solid #cccccc;
    padding: 0 10px;
  }
  button {
    border: none;
    color: #fff;
    background: slateblue;

    &:hover {
      background: darken(slateblue, 10);
    }
    &:disabled {
      background: lighten(slateblue, 20);
    }
  }
  label {
    width: 40px;
    text-align: right;
    margin-right: 10px;
  }
}
</style>>