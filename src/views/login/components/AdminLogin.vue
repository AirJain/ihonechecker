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
    <van-form @submit="onSubmit">
      <div class="fields">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
      <van-button round block type="info" class="login" native-type="submit"
        >登录</van-button
      >
    </van-form>
  </div>
</template> 
<script>
import Vue from "vue";
import { Field } from "vant";
import { Toast } from "vant";
import { Form } from "vant";
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
export default {
  props: {},
  watch: {},
  components: {},

  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      this.$http
        .get("https://iphonekc.doudtong.com/stock/rest/sysUser/adminLogin", {
          params: {
            phone: values.username,
            password: values.password,
          },
        })
        .then((res) => {
          Toast(res.data.msg);
          if (res.data.code == 1) {
            this.$user.setUser(res.data.data, 1);
            this.$router.push("/index");
          }
        })
        .finally(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 10px;

  .fields {
    margin-top: 80px;
  }
  .xieyi {
    width: 100%;
    display: flex;
    margin-top: 40px;
    color: #888a96;
    font-size: 14px;
    .icon {
      margin-right: 5px;
    }
    .link {
      color: #ef7a61;
    }
  }
  .login {
    border-radius: 40px;
    margin-top: 50px;
    color: #ffffff;
    border: none;
    font-size: 20px;
  }

  .all-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
