<template>
  <div id="app">
    <router-view  v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style> 
/* .van-tabs__line { 
    background-color: #ffffff; 
}
.van-tab--active {
  background-color: #0079fe;

  color: #ffffff;
} */
.van-checkbox__label {
  margin-right: 8px;
}
.van-nav-bar {
  background-color: #f2f2f2;
  border-bottom: 1px solid #e4e4e4;
}
.van-search {
  background-color: #f2f2f2;
  border-bottom: 1px solid #e4e4e4;
}
.van-search__content {
  background-color: #ffffff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f2f2;
  height: 100vh;
  overflow-y: auto;
}
</style>
