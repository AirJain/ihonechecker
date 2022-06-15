<template>
  <div class="main">
    <van-tabs v-model="active" sticky @change="changeTab">
      <van-tab title="监控列表">
        <MonitorList :userInfo="userInfo" :active="listActive" />
      </van-tab>
      <van-tab title="添加监控">
        <AddMonitor :userInfo="userInfo" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import MonitorList from "./MonitorList";
import AddMonitor from "./AddMonitor";

import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  components: { MonitorList, AddMonitor },
  data() {
    return {
      active: 0,
      openId: "",
      userInfo: null,
      listActive: true, 
    };
  },
  created() {},
  mounted() {
    this.userInfo = this.$user.getUser(2);
  },
  methods: {
    changeTab(active) {
      if (active == 0) {
        this.listActive = true; 
      } else if (active == 1) {
        this.listActive = false; 
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
