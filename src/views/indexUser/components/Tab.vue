<template>
  <div class="main">
    <van-tabs v-model="active" sticky>
      <van-tab title="监控列表">
        <MonitorList/>
      </van-tab>
      <van-tab title="添加监控">
        <AddMonitor />
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
      openId:""
    };
  },
  created() {},
  mounted() {
   
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
