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
      <van-button round block type="info" class="login" native-type="submit">
        <div class="flex">
          <div class="all-center">
            <img src="../../../assets/img/wechat.png" class="wechat" />
          </div>
          <div class="all-center">微信账号登录</div>
        </div>
      </van-button>
      <div class="xieyi all-center" @click="changeSelected">
        <div class="all-center">
          <van-icon
            :name="require('../../../assets/img/noselected.png')"
            size="15"
            class="icon"
            v-if="selected == false"
          ></van-icon>
          <van-icon
            :name="require('../../../assets/img/selected.png')"
            size="15"
            class="icon"
            v-else
          ></van-icon>
        </div>
        <div class="all-center">
          <div>
            我已阅读并同意
            <span class="link"> 《用户协议》 </span>
            和
            <span class="link"> 《隐私政策》 </span>
          </div>
        </div>
      </div>
      <div class="tip">提示：必须关注微信公众号，不然无法接收通知提醒哦</div>
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
      selected: false,
      time: "验证码",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      if (this.selected == false) {
        Toast("请勾选隐私协议");
        return;
      }
      this.$http
        .post(
          "https://v1.doudtong.com/api/auth/smslogin",
          this.$qs.stringify({
            phone: this.tel,
            code: this.sms,
          })
        )
        .then((res) => {
          if (res.data.code === 1001) {
            this.$user.setUser(res.data);
            this.$router.push("/mine");
          }
        })
        .finally(() => {});
    },
    changeSelected() {
      this.selected = !this.selected;
    }, 
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 10px;

  .flex {
    display: flex;
  }
  .wechat {
    width: 30px;
    height: 30px;
    margin-right: 10px;
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
  .tip {
    color: #888a96;
    font-size: 14px;
    margin-top:10px;
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
