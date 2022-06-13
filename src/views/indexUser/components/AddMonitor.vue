<template>
  <div class="content">
    <van-form @submit="onSubmit">
      <div class="fields">
        <van-field
          readonly
          clickable
          :value="nationValue.text"
          name="local"
          label="选择国家"
          placeholder="请选择国家"
          @click="showNationPicker = true"
          :rules="[{ required: true, message: '请选择国家' }]"
        />
        <van-field
          readonly
          clickable
          :value="phoneValue.text"
          name="productName"
          label="选择型号"
          placeholder="请选择型号"
          @click="showPhonePicker = true"
          :rules="[{ required: true, message: '请选择型号' }]"
        />
        <van-field
          readonly
          clickable
          :value="operatorValue.text"
          name="yys"
          label="选择运营商"
          placeholder="选择运营商"
          @click="showOperatorPicker = true"
          v-if="operatorColumns.length > 0"
        />
        <van-field
          v-model="emailCode"
          name="zipCode"
          label="输入邮编"
          placeholder="请输入邮编"
          :rules="[{ required: true, message: '请填写邮编' }]"
        >
          <template #button>
            <van-button size="small" type="info" @click="onGetShopList"
              >确定</van-button
            >
          </template>
        </van-field>
        <van-field
          :name="'checkboxGroup' + index"
          :label="item.color"
          v-for="(item, index) in iphoneList"
          :key="index"
        >
          <template #input>
            <van-checkbox-group v-model="item.check">
              <van-checkbox
                shape="square"
                :name="item2.originModel"
                icon-size="15px"
                v-for="(item2, index2) in item.models"
                :key="index2"
                >{{ item2.showModel }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>
        <!-- <div class="peizhi" v-for="(item, index) in iphoneList" :key="index">
          <div class="title">{{ item.color }}:</div>
          <van-checkbox-group v-model="item.check">
            <van-checkbox
              shape="square"
              :name="item2.originModel"
              icon-size="15px"
              v-for="(item2, index2) in item.models"
              :key="index2"
              >{{ item2.showModel }}</van-checkbox
            >
          </van-checkbox-group>
        </div> -->
        <van-field name="status" label="立即开启监控">
          <template #input>
            <van-switch v-model="checked" size="24" />
          </template>
        </van-field>
        <!-- 国家选择 -->
        <van-popup v-model="showNationPicker" round position="bottom">
          <van-picker
            show-toolbar
            :default-index="defaultNation"
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
      emailCode: "430000",
      defaultNation: 0,
      nationValue: { text: "", value: "" },
      phoneValue: { text: "", value: "" },
      operatorValue: { text: "", value: "" },
      showNationPicker: false,
      showPhonePicker: false,
      showOperatorPicker: false,
      configs: null,
      nationColumns: [],
      phoneColumns: [],
      operatorColumns: [],
      result: ["a", "b"],
      iphoneList: [],
    };
  },
  created() {},
  mounted() {
    this.onGetConfig();
  },
  methods: {
    clearSelect() {
      this.phoneColumns = [];
      this.operatorColumns = [];
      this.operatorValue = { text: "", value: "" };
      this.phoneValue = { text: "", value: "" };
    },
    onConfirmNation(value) {
      this.nationValue = value;
      this.setPhone_Carriers(value.value);
      this.showNationPicker = false;
    },
    onConfirmPhone(value) {
      this.phoneValue = value;
      this.iphoneList = [];

      this.showPhonePicker = false;
    },
    onConfirmOperator(value) {
      this.operatorValue = value;
      this.showOperatorPicker = false;
    },
    //设置运营商和ihpne型号
    setPhone_Carriers(code) {
      this.clearSelect();
      for (var i = 0; i < this.configs.length; i++) {
        let item = this.configs[i];
        if (code == item.code) {
          //设置型号
          for (var j = 0; j < item.iPhoneTypes.length; j++) {
            let item1 = item.iPhoneTypes[j];
            this.phoneColumns.push({
              value: item1.code,
              text: item1.name,
            });
          }
          //设置运营商
          if (item.carriers != null)
            for (var j = 0; j < item.carriers.length; j++) {
              let item1 = item.carriers[j];
              this.operatorColumns.push({
                value: item1.code,
                text: item1.name,
              });
            }
          break;
        }
      }
    },
    onGetConfig() {
      this.$http
        .get("http://118.31.113.136:8081/stock/rest/stock/queryConfig", {})
        .then((res) => {
          if (res.status == 200) {
            this.onSetConfig(res.data.data);
          }
        })
        .finally(() => {});
    },
    onSetConfig(data) {
      this.configs = data;
      for (var i = 0; i < data.length; i++) {
        let item = data[i];
        data[i].value = item.code;
        //国家列表
        this.nationColumns.push({
          value: item.code,
          text: this.$helper.convertNation(item.code),
        });
        if (item.code == "cn") {
          this.defaultNation = i;
        }
      }
    },
    onGetShopList() {
      this.$http
        .get("http://118.31.113.136:8081/stock/rest/stock/queryStores", {
          params: {
            local: this.nationValue.value,
            productName: this.phoneValue.value,
            zipCode: this.emailCode,
            version: "",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.setPhoneModel(res.data.data);
          }
        })
        .finally(() => {});
    },
    //设置iphone的具体手机型号，内存/颜色
    setPhoneModel(data) {
      let tempList = [];
      if (data.props) {
        if (data.props.pageProps) {
          this.phoneModes = JSON.parse(data.props.pageProps.models);
          for (var key in this.phoneModes.iPhoneModels) {
            if (this.phoneValue.value == key) {
              tempList = this.phoneModes.iPhoneModels[key];
              this.setModel(tempList, this.phoneModes.iPhoneColors);
              break;
            }
          }
        }
      }
    },
    //设置iphone的颜色
    setModel(list, colors) {
      this.iphoneList = [];
      for (var key in list) {
        let item = list[key];
        let models = this.setMemory(item);
        for (var key2 in colors) {
          let item2 = colors[key2];
          if (key == key2) {
            this.iphoneList.push({
              color: item2,
              models: models,
              check: [],
            });
          }
        }
      }
    },
    //设置iphone的内存大小
    setMemory(models) {
      let newModels = [];
      let initMemory = 128;
      let model = null;
      for (var i = 0; i < models.length; i++) {
        model = {
          originModel: models[i],
          showModel: initMemory + "GB",
        };
        initMemory = initMemory * 2;
        if (i == 3) {
          model = {
            originModel: models[i],
            showModel: "1TB",
            key: "check" + i,
          };
        }
        newModels.push(model);
      }
      return newModels;
    },
    onSubmit(values) {
      let status = null;
      if (values.status == true) {
        status = 1;
      } else {
        status = 2;
      }
      let productName = this.phoneValue.value; 
      let local = this.nationValue.value;
      let products = this.getProductCode(values, status); 
      this.$http
        .post(
          "http://118.31.113.136:8081/stock/rest/sysMonitor/insert",
          this.$qs.stringify({
            userId: 1,
            openId: 1,
            local: local,
            zipCode: values.zipCode,
            productName: productName,
            version: "",
            status: status,
            products: JSON.stringify(products),
          })
        )
        .then((res) => {})
        .finally(() => {});
    },
    getProductCode(data, status) {
      let list = [];
      for (var key in data) {
        let item = data[key];
        if (key.indexOf("checkboxGroup") != -1) {
          for (var i = 0; i < item.length; i++) {
            list.push({
              productCode: item[i],
              stockStatus: status,
            });
          }
        }
      }
      return list;
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
      width: 18%;
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
