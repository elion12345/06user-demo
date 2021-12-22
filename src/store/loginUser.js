import * as userApi from "@/api/user.js";

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    isLoading: false,
    user: ''
  },
  getters:{
    status(state){
      if(state.isLoading){
        return "loading"
      }else if(state.user){
        return "login"
      }else{
        return "unlogin"
      }
    }
  },
  mutations: {
    // payload为布尔
    setIsLoading(state, payload) {
      return state.isLoading = payload
    },
    // payload为{loginId,loginPwd}
    setUser(state, payload) {
      return state.user = payload
    }
  },
  actions: {
    // payload为{loginId,loginPwd}
    async login(ctx, payload) {
      ctx.commit("setIsLoading", true);
      const resp = await userApi.login(payload.loginId, payload.loginPwd)
      ctx.commit("setUser", resp);
      ctx.commit("setIsLoading", false);
      return resp;
    },
    async loginOut(ctx) {
      ctx.commit("setIsLoading", true);
      await userApi.loginOut()
      ctx.commit("setUser", null);
      ctx.commit("setIsLoading", false);
    },
    async whoAmI(ctx){
      ctx.commit("setIsLoading",true);
      const resp = await userApi.whoAmI();
      ctx.commit("setUser", resp);
      ctx.commit("setIsLoading", false);
    }
    
  },
}