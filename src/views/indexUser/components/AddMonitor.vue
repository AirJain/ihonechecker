<template>
  <div class="content">
    <van-form @submit="onSubmit">
      <div class="fields">
        <van-field
          readonly
          clickable
          :value="nationValue"
          label="选择国家"
          placeholder="请选择国家"
          @click="showNationPicker = true"
          :rules="[{ required: true, message: '请选择国家' }]"
        />
        <van-field
          readonly
          clickable
          :value="phoneValue"
          label="选择型号"
          placeholder="请选择型号"
          @click="showPhonePicker = true"
          :rules="[{ required: true, message: '请选择型号' }]"
        />
        <van-field
          readonly
          clickable
          :value="operatorValue"
          label="选择运营商"
          placeholder="选择运营商"
          @click="showOperatorPicker = true"
          :rules="[{ required: true, message: '请选择运营商' }]"
        />
        <van-field
          v-model="emailCode"
          label="输入邮编"
          placeholder="请输入邮编"
          :rules="[{ required: true, message: '请填写邮编' }]"
        />
        <div class="peizhi">
          <div class="title">Sierra Blue:</div>
          <van-checkbox-group v-model="result">
            <van-checkbox shape="square" name="a" icon-size="15px"
              >128 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >256 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >512 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >1 GB</van-checkbox
            >
          </van-checkbox-group>
        </div>
        <div class="peizhi">
          <div class="title">Yellow:</div>
          <van-checkbox-group v-model="result">
            <van-checkbox shape="square" name="a" icon-size="15px"
              >128 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >256 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >512 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >1 GB</van-checkbox
            >
          </van-checkbox-group>
        </div>
        <div class="peizhi">
          <div class="title">Green:</div>
          <van-checkbox-group v-model="result">
            <van-checkbox shape="square" name="a" icon-size="15px"
              >128 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >256 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >512 G</van-checkbox
            >
            <van-checkbox shape="square" name="b" icon-size="15px"
              >1 GB</van-checkbox
            >
          </van-checkbox-group>
        </div>
        <van-field
          label="立即开启监控"
          readonly
          :rules="[{ required: true, message: '' }]"
        >
          <template #button>
            <van-switch v-model="checked" size="24" />
          </template>
        </van-field>
        <!-- 国家选择 -->
        <van-popup v-model="showNationPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="nationColumns"
            @cancel="showNationPicker = false"
            @confirm="onConfirmNation"
          />
        </van-popup>
        <!-- 型号选择 -->
        <van-popup v-model="showPhonePicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="phoneColumns"
            @cancel="showPhonePicker = false"
            @confirm="onConfirmPhone"
          />
        </van-popup>
        <!-- 运营商选择 -->
        <van-popup v-model="showOperatorPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="operatorColumns"
            @cancel="showOperatorPicker = false"
            @confirm="onConfirmOperator"
          />
        </van-popup>
      </div>
      <div class="btn-outer">
        <van-button round block type="info" class="login" native-type="submit"
          >保存</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "vant";
import { Picker } from "vant";
import { Popup } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Switch);
export default {
  props: {},
  components: {},
  data() {
    return {
      checked: false,
      emailCode: "",
      nationValue: "",
      phoneValue: "",
      operatorValue: "",
      showNationPicker: false,
      showPhonePicker: false,
      showOperatorPicker: false,
      nationColumns: [
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
      ],
      phoneColumns: ["苹果13", "苹果12", "苹果11", "苹果10", "苹果8"],
      operatorColumns: ["电信", "联通", "移动"],
      result: ["a", "b"],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onConfirmNation(value) {
      this.nationValue = value;
      this.showNationPicker = false;
    },
    onConfirmPhone(value) {
      this.phoneValue = value;
      this.showPhonePicker = false;
    },
    onConfirmOperator(value) {
      this.operatorValue = value;
      this.showOperatorPicker = false;
    },
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
  },
};
</script>
<style lang="scss" scoped>
.van-checkbox-group {
  display: flex;
}

.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  font-size: 15px;
  overflow-y: auto;
  margin: 10px;
  border-radius: 10px;
  background: #ffffff;
  .peizhi {
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    padding: 10px 5px;
    font-size: 13px;

    .title {
      width: 24%;
      text-align: right;
      margin-right: 5px;
    }
  }
  .btn-outer {
    padding: 0 15px;
    .login {
      margin: 35px 0;
    }
  }
}
</style>
