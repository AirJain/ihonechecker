<!--
 * @Author: yxx 793505879@qq.com
 * @Date: 2022-06-11 10:00:50
 * @LastEditors: yxx 793505879@qq.com
 * @LastEditTime: 2022-06-12 20:51:57
 * @FilePath: \ihonechecker\src\views\login\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="page">
    <TopBar title="登录" :showLeft="false" />
    <LoginBtn />
    <AdminLogin />
  </div>
</template>
<script>
import Vue from "vue";

import TopBar from "@/components/TopBar";
import { Toast } from "vant";
import AdminLogin from "./components/AdminLogin";
import LoginBtn from "@/components/LoginBtn";

Vue.use(Toast);
export default {
  components: {
    TopBar,
    AdminLogin,
    LoginBtn,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.test();
  },
  methods: {
    test() {
      let models =
        '{"iPhoneModels":{"i13mini":{"pink":["MLDE3CH/A","MLDK3CH/A","MLDQ3CH/A"],"blue":["MLDG3CH/A","MLDM3CH/A","MLDT3CH/A"],"midnight":["MLDC3CH/A","MLDH3CH/A","MLDN3CH/A"],"starlight":["MLDD3CH/A","MLDJ3CH/A","MLDP3CH/A"],"product_red":["MLDF3CH/A","MLDL3CH/A","MLDR3CH/A"]},"i13":{"pink":["MLDW3CH/A","MLE23CH/A","MLE93CH/A"],"blue":["MLDY3CH/A","MLE43CH/A","MLEC3CH/A"],"midnight":["MLDU3CH/A","MLE03CH/A","MLE63CH/A"],"starlight":["MLDV3CH/A","MLE13CH/A","MLE73CH/A"],"product_red":["MLDX3CH/A","MLE33CH/A","MLEA3CH/A"]},"i13Pro":{"sierrablue":["MLT83CH/A","MLTE3CH/A","MLTJ3CH/A","MLTN3CH/A"],"silver":["MLT63CH/A","MLTC3CH/A","MLTG3CH/A","MLTL3CH/A"],"gold":["MLT73CH/A","MLTD3CH/A","MLTH3CH/A","MLTM3CH/A"],"graphite":["MLT53CH/A","MLT93CH/A","MLTF3CH/A","MLTK3CH/A"]},"i13ProMax":{"sierrablue":["MLH73CH/A","MLHC3CH/A","MLHG3CH/A","MLHL3CH/A"],"silver":["MLH53CH/A","MLH93CH/A","MLHE3CH/A","MLHJ3CH/A"],"gold":["MLH63CH/A","MLHA3CH/A","MLHF3CH/A","MLHK3CH/A"],"graphite":["MLH43CH/A","MLH83CH/A","MLHD3CH/A","MLHH3CH/A"]}},"iPhoneColors":{"pink":"粉色","blue":"蓝色","midnight":"午夜色","starlight":"星光色","product_red":"红色","sierrablue":"远峰蓝色","silver":"银色","gold":"金色","graphite":"石墨色"},"urls":{"i13mini":"&parts.0=MLDE3CH/A&parts.1=MLDK3CH/A&parts.2=MLDQ3CH/A&parts.3=MLDG3CH/A&parts.4=MLDM3CH/A&parts.5=MLDT3CH/A&parts.6=MLDC3CH/A&parts.7=MLDH3CH/A&parts.8=MLDN3CH/A&parts.9=MLDD3CH/A&parts.10=MLDJ3CH/A&parts.11=MLDP3CH/A&parts.12=MLDF3CH/A&parts.13=MLDL3CH/A&parts.14=MLDR3CH/A","i13":"&parts.0=MLDW3CH/A&parts.1=MLE23CH/A&parts.2=MLE93CH/A&parts.3=MLDY3CH/A&parts.4=MLE43CH/A&parts.5=MLEC3CH/A&parts.6=MLDU3CH/A&parts.7=MLE03CH/A&parts.8=MLE63CH/A&parts.9=MLDV3CH/A&parts.10=MLE13CH/A&parts.11=MLE73CH/A&parts.12=MLDX3CH/A&parts.13=MLE33CH/A&parts.14=MLEA3CH/A","i13Pro":"&parts.0=MLT83CH/A&parts.1=MLTE3CH/A&parts.2=MLTJ3CH/A&parts.3=MLTN3CH/A&parts.4=MLT63CH/A&parts.5=MLTC3CH/A&parts.6=MLTG3CH/A&parts.7=MLTL3CH/A&parts.8=MLT73CH/A&parts.9=MLTD3CH/A&parts.10=MLTH3CH/A&parts.11=MLTM3CH/A&parts.12=MLT53CH/A&parts.13=MLT93CH/A&parts.14=MLTF3CH/A&parts.15=MLTK3CH/A","i13ProMax":"&parts.0=MLH73CH/A&parts.1=MLHC3CH/A&parts.2=MLHG3CH/A&parts.3=MLHL3CH/A&parts.4=MLH53CH/A&parts.5=MLH93CH/A&parts.6=MLHE3CH/A&parts.7=MLHJ3CH/A&parts.8=MLH63CH/A&parts.9=MLHA3CH/A&parts.10=MLHF3CH/A&parts.11=MLHK3CH/A&parts.12=MLH43CH/A&parts.13=MLH83CH/A&parts.14=MLHD3CH/A&parts.15=MLHH3CH/A"},"default":{"iPhoneModels":{"i13mini":{"pink":["MLDE3CH/A","MLDK3CH/A","MLDQ3CH/A"],"blue":["MLDG3CH/A","MLDM3CH/A","MLDT3CH/A"],"midnight":["MLDC3CH/A","MLDH3CH/A","MLDN3CH/A"],"starlight":["MLDD3CH/A","MLDJ3CH/A","MLDP3CH/A"],"product_red":["MLDF3CH/A","MLDL3CH/A","MLDR3CH/A"]},"i13":{"pink":["MLDW3CH/A","MLE23CH/A","MLE93CH/A"],"blue":["MLDY3CH/A","MLE43CH/A","MLEC3CH/A"],"midnight":["MLDU3CH/A","MLE03CH/A","MLE63CH/A"],"starlight":["MLDV3CH/A","MLE13CH/A","MLE73CH/A"],"product_red":["MLDX3CH/A","MLE33CH/A","MLEA3CH/A"]},"i13Pro":{"sierrablue":["MLT83CH/A","MLTE3CH/A","MLTJ3CH/A","MLTN3CH/A"],"silver":["MLT63CH/A","MLTC3CH/A","MLTG3CH/A","MLTL3CH/A"],"gold":["MLT73CH/A","MLTD3CH/A","MLTH3CH/A","MLTM3CH/A"],"graphite":["MLT53CH/A","MLT93CH/A","MLTF3CH/A","MLTK3CH/A"]},"i13ProMax":{"sierrablue":["MLH73CH/A","MLHC3CH/A","MLHG3CH/A","MLHL3CH/A"],"silver":["MLH53CH/A","MLH93CH/A","MLHE3CH/A","MLHJ3CH/A"],"gold":["MLH63CH/A","MLHA3CH/A","MLHF3CH/A","MLHK3CH/A"],"graphite":["MLH43CH/A","MLH83CH/A","MLHD3CH/A","MLHH3CH/A"]}},"iPhoneColors":{"pink":"粉色","blue":"蓝色","midnight":"午夜色","starlight":"星光色","product_red":"红色","sierrablue":"远峰蓝色","silver":"银色","gold":"金色","graphite":"石墨色"},"urls":{"i13mini":"&parts.0=MLDE3CH/A&parts.1=MLDK3CH/A&parts.2=MLDQ3CH/A&parts.3=MLDG3CH/A&parts.4=MLDM3CH/A&parts.5=MLDT3CH/A&parts.6=MLDC3CH/A&parts.7=MLDH3CH/A&parts.8=MLDN3CH/A&parts.9=MLDD3CH/A&parts.10=MLDJ3CH/A&parts.11=MLDP3CH/A&parts.12=MLDF3CH/A&parts.13=MLDL3CH/A&parts.14=MLDR3CH/A","i13":"&parts.0=MLDW3CH/A&parts.1=MLE23CH/A&parts.2=MLE93CH/A&parts.3=MLDY3CH/A&parts.4=MLE43CH/A&parts.5=MLEC3CH/A&parts.6=MLDU3CH/A&parts.7=MLE03CH/A&parts.8=MLE63CH/A&parts.9=MLDV3CH/A&parts.10=MLE13CH/A&parts.11=MLE73CH/A&parts.12=MLDX3CH/A&parts.13=MLE33CH/A&parts.14=MLEA3CH/A","i13Pro":"&parts.0=MLT83CH/A&parts.1=MLTE3CH/A&parts.2=MLTJ3CH/A&parts.3=MLTN3CH/A&parts.4=MLT63CH/A&parts.5=MLTC3CH/A&parts.6=MLTG3CH/A&parts.7=MLTL3CH/A&parts.8=MLT73CH/A&parts.9=MLTD3CH/A&parts.10=MLTH3CH/A&parts.11=MLTM3CH/A&parts.12=MLT53CH/A&parts.13=MLT93CH/A&parts.14=MLTF3CH/A&parts.15=MLTK3CH/A","i13ProMax":"&parts.0=MLH73CH/A&parts.1=MLHC3CH/A&parts.2=MLHG3CH/A&parts.3=MLHL3CH/A&parts.4=MLH53CH/A&parts.5=MLH93CH/A&parts.6=MLHE3CH/A&parts.7=MLHJ3CH/A&parts.8=MLH63CH/A&parts.9=MLHA3CH/A&parts.10=MLHF3CH/A&parts.11=MLHK3CH/A&parts.12=MLH43CH/A&parts.13=MLH83CH/A&parts.14=MLHD3CH/A&parts.15=MLHH3CH/A"}}}';
      let dd = JSON.parse(models);
      console.log(dd);
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  background: #f5f5f5;
}
</style>
