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
      <van-button round block type="primary" class="login" native-type="submit">
        <div class="flex">
          <div class="all-center">
            <img src="../../../assets/img/wechat.png" class="wechat" />
          </div>
          <div class="all-center">微信账号登录</div>
        </div>
      </van-button> 
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
      time: "验证码",
      code: null,
    };
  },
  created() {
    const url = decodeURI(decodeURI(window.location.href));
    let d = url.split("?");
    if (d[1]) {
      var str = url.split("?")[1];
      var keys = str.split("&");
      var obj = {};
      keys.forEach((item, idx, data) => {
        var arr = item.split("=");
        obj[arr[0]] = arr[1];
      });

      const { inviter, code } = obj;
      if (inviter && inviter != undefined) {
        this.inviter = inviter.replaceAll("#/", "");
      }

      if (code != null && code != undefined) {
        this.code = code.replaceAll("#/", "");
        this.wechatBack();
      }
    }
  },
  mounted() {},
  methods: {
    onSubmit(values) {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24668b9530e5fa2b&redirect_uri=https%3A%2F%2Fiphonekc.doudtong.com%2F%23%2FuserLogin&response_type=code&scope=snsapi_userinfo&state=bf9c8eb02d401931b644c92a5f2a418c&connect_redirect=1#wechat_redirect";
    },
    wechatBack() {
      this.$http
        .get("https://iphonekc.doudtong.com/stock/rest/sysUser/accessToken", {
          params: {
            code: this.code,
          },
        })
        .then((res) => {
          let data = res.data.data;
          if (res.status == 200) {
            this.getWxUser(data);
          }
        });
    },
    //获取openid，用户头像等信息
    getWxUser(data) {
      this.$http
        .get("https://iphonekc.doudtong.com/stock/rest/sysUser/wxUserInfo", {
          params: {
            openId: data.openid,
            token: data.access_token,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.getUserData(res.data.data);
          }
        });
    },
    //获取用户id
    getUserData(data) {
      this.$http
        .get("https://iphonekc.doudtong.com/stock/rest/sysUser/login", {
          params: {
            openId: data.openid,
            name: data.nickname,
            phone: "",
            userPic: data.headimgurl,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.$user.setUser(res.data.data, 2);
            Toast("登录成功");
            this.$router.push("/userIndex");
          }
        });
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
    margin-top: 10px;
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
