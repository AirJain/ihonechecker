<template>
  <div class="content" :style="{ height: height }">
    <van-list
      v-show="list.length > 0"
      v-model="loading"
      :finished="finished"
      finished-text="—— 没有更多了 ——"
      @load="onLoad"
    >
      <div class="list" v-for="(item, index) in list" :key="index">
        <div class="list-item">
          <div class="top">
            <div>
              {{ $helper.convertNation(item.local) }}
              <span class="time"> {{ item.createTime }}</span>
            </div>
            <div>
              <van-switch
                v-model="item.checked"
                inactive-color="#f2f2f2"
                size="20px"
                disabled
              />
            </div>
          </div>
          <div class="mid">
            <div>邮编：{{ item.zipCode }}</div>
            <div>型号：{{ $helper.convertPhone(item.productName) }}</div>
            <div>运营商：{{ item.version == "" ? "暂无" : item.version }}</div>
          </div>
          <div class="bottom">
            <div
              class="peizhi"
              v-for="(item2, key, index2) in item.newProducts"
              :key="index2"
            >
              <span class="type"> {{ item2[0].colorText }}： </span>
              <span
                class="memory"
                v-for="(item3, index3) in item2"
                :key="index3"
                >{{ item3.memory }}</span
              >
            </div>
          </div>
          <div class="caozuo">
            <div class="delete" @click="doDelete(item.id)">
              <van-icon name="delete" size="15" /> 删除
            </div>
            <div class="edit" @click="edit(item.id)">
              <van-icon name="edit" size="15" /> 编辑
            </div>
          </div>
        </div>
      </div>
    </van-list>
    <EditMonitor
      :visible="visible"
      @close="closeEdit"
      @refresh="refresh"
      :monitorId="monitorId"
      :userInfo="userInfo"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "vant";
import { List } from "vant";
import { Toast } from "vant";
import { Dialog } from "vant";
import EditMonitor from "./EditMonitor";

Vue.use(Toast);
Vue.use(List);
Vue.use(Switch);
export default {
  props: {
    height: {},
    userInfo: {},
    active: {},
  },
  watch: {
    active(val) {
      if (val == true) {
        this.getList();
      }
    },
  },
  components: { EditMonitor },
  data() {
    return {
      checked: false,
      page: 1,
      size: 10,
      finished: false,
      loading: false,
      list: [],
      visible: false,
      monitorId: 0,
    };
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    refresh() {
      this.getList();
    },
    closeEdit() {
      this.visible = false;
    },
    edit(id) {
      this.monitorId = id;
      this.visible = true;
    },
    doDelete(id) {
      Dialog.confirm({
        message: "您确定删除该监控吗？",
      })
        .then(() => {
          this.$http
            .get("https://iphonekc.doudtong.com/stock/rest/sysMonitor/delete", {
              params: {
                id: id,
              },
            })
            .then((res) => {
              if (res.status == 200) {
                Toast(res.data.msg);
                this.getList();
              }
            })
            .finally(() => {});
        })
        .catch(() => {
          // on cancel
        });
    },
    onLoad() {
      this.page = this.page + 1;
      this.getList();
    },
    getList() {
      this.$http
        .get("https://iphonekc.doudtong.com/stock/rest/sysMonitor/pageList", {
          params: {
            userId: this.userInfo.id,
            pageNo: this.page,
            pageSize: this.size,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            this.setList(res.data.data);
            this.isListEnd(res.data.total);
          }
        })
        .finally(() => {
          this.loading = false;
          this.isLoading = false;
        });
    },
    setList(list) {
      let obj = {};
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        let checked = false;
        for (var j = 0; j < item.products.length; j++) {
          let item1 = item.products[j];
          if (item1.productCode)
            if (item1.stockStatus == 1) {
              checked = true;
            } else if (item1.stockStatus == 2) {
              checked = false;
            }
        }
        let dd = this.$helper.setReduce(item.products);
        list[i].newProducts = dd;
        list[i].checked = checked;
      }

      this.list = list;
    },
    isListEnd(total) {
      if (total < this.size * this.page) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 84vh;
  overflow-y: auto;
  font-size: 24px;
  margin-top: 10px;
  .list {
    background: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    .list-item {
      font-size: 14px;
      position: relative;
      .top {
        display: flex;
        justify-content: space-between;
        .time {
          color: #888a96;
          margin-left: 10px;
        }
      }
      .mid {
        display: flex;
        justify-content: space-between;
      }
      .bottom {
        text-align: left;
        margin-top: 10px;
        .peizhi {
          display: flex;
          margin-top: 10px;
          .type {
            width: 30%;
          }
          .memory {
            width: calc(70% / 4);
          }
        }
      }
      .caozuo {
        display: flex;
        flex-direction: row-reverse;
        .edit {
          color: #888a96;
          right: 2px;
          bottom: 2px;
          margin-top: 10px;
          text-align: right;
          margin-right: 10px;
        }
        .delete {
          color: #888a96;
          right: 15px;
          bottom: 2px;
          margin-top: 10px;
          text-align: right;
        }
      }
    }
  }
}
</style>
