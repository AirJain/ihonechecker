<template>
  <div class="page">
    <TopBar
      title=""
      :showLeft="false"
      ref="topBar"
      :rightText="user_info.name"
      @rightClick="logout"
    />
    <Search
      ref="search"
      placeholder="请输入关键词"
      @onInput="onInput($event)"
      @onSearch="onSearch($event)"
    />
    <List :list="list" :keyword="keyword" />
  </div>
</template>
<script>
import Vue from "vue";

import TopBar from "@/components/TopBar";
import Search from "@/components/Search";
import List from "./components/List";
import { Toast } from "vant";
import { Dialog } from "vant";
Vue.use(Toast);
export default {
  components: {
    TopBar,
    Search,
    List,
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      listHeight: 0,
      user_info: { name: "" },
      keyword:""
    };
  },
  created() {},
  mounted() {
    this.setListHeight();
    this.user_info = this.$user.getUser(1); 
  },
  methods: {
    setListHeight() {
      let height1 = this.$refs.topBar.$el.clientHeight;
      let height2 = this.$refs.search.$el.clientHeight;
      this.listHeight = window.screen.height - height1 - height2 + "px";
    },
    onInput(val) {
      this.searchData = val;
    },
    onCancel() {
      let Detail = this.$router.resolve({
        name: "collect",
      });
      window.open(Detail.href, "_blank");
    },
    onSearch(val) {
      if (val == "") {
        Toast("请输入关键字");
        return;
      }
      this.keyword = val; 
    },
    logout() {
      let that = this;
      Dialog.confirm({
        message: "您确定要退出登录吗？",
      })
        .then(() => {
          that.$user.logout(1);
          that.$router.push("/login");
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
