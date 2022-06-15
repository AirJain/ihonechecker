<template>
  <div class="page">
    <TopBar
      title=""
      :showLeft="false"
      ref="topBar"
      :rightText="userInfo.name"
      :img="userInfo.userPic"
      @rightClick="logout"
    />
    <Tab />
  </div>
</template>
<script>
import Vue from "vue";

import TopBar from "@/components/TopBar";
import Tab from "./components/Tab";

import { Toast } from "vant";
import { Dialog } from "vant";
Vue.use(Toast);
export default {
  components: {
    TopBar,
    Tab,
  },
  data() {
    return {
      listHeight: 0,
      userInfo: {
        name: "",
        userPic: "",
      },
    };
  },
  created() {},
  mounted() {
    this.userInfo = this.$user.getUser(2);
  },
  methods: {
    logout() {
      let that = this;
      Dialog.confirm({
        message: "您确定要退出登录吗？",
      })
        .then(() => {
          that.$user.logout(2);
          that.$Jump("/userLogin");
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  background: #f5f5f5;
}
</style>
