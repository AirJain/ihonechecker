<!--
 * @Author: your name
 * @Date: 2022-05-02 09:55:27
 * @LastEditTime: 2022-05-02 11:53:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ddt-h5\src\components\NoData.vue
-->
<template>
  <div class="content">
    <van-icon
      :name="require('../assets/img/iPhone.png')"
      class="img"
    ></van-icon> 
  </div>
</template> 
<script> 
export default {
  props: {},
  watch: {},
  components: {},

  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  .flex {
    display: flex;
    width: 100%;
  }
  .img {
    margin-top: 30px;
    height: 100%;
  }
  .all-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
