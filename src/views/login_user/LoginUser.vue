<template>
  <div class="page">
    <TopBar title="登录" :showLeft="false"/>
    <LoginBtn />
    <Login />
  </div>
</template>
<script>
import Vue from "vue";

import TopBar from "@/components/TopBar";
import { Toast } from "vant";
import Login from "./components/Login";
import LoginBtn from "@/components/LoginBtn";
Vue.use(Toast);
export default {
  components: {
    TopBar,
    Login,
    LoginBtn,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.page {
  background: #f5f5f5;
}
</style>
